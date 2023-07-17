import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import Title from "../components/Title";
import { getTranslate } from "../localization/index";
import './contact.css';
import Contact from "../components/Contact";
import CallIcon from "@material-ui/icons/CallOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import RoomIcon from "@material-ui/icons/RoomOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  contactGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5,
    },
  },
  formGrid: {
    padding: 10,
  },
  detailsGrid: {
    padding: 10,
  },
  getintouch: {
    textAlign: "left",
  },
  iconStyle: {
    fontSize: 30,
  },
}));

export default function ContactScreen() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid justifyContent='flex-start' alignItems='flex-start' container className={classes.root}>
      <Grid className={classes.contactGrid} item container xs={12}>
        <Title title={translate.contactme} />
        <Grid container direction='row'>
          <Grid className={classes.formGrid} item xs={12} md={6}>
            <Typography className={classes.getintouch} variant='h4'>{translate.getintouch}</Typography>
            <TextField
              style={{ marginTop: 25, }}
              size='medium'
              fullWidth
              required
              label={translate.enteryourname}
              variant='outlined'
            />
            <TextField
              style={{ marginTop: 25, }}
              size='medium'
              fullWidth
              required
              label={translate.enteryouremail}
              variant='outlined'
            />
            <TextField
              style={{ marginTop: 25, }}
              size='medium'
              fullWidth
              required
              label={translate.enteryoursubject}
              variant='outlined'
            />
            <TextField
              style={{ marginTop: 25, }}
              size='medium'
              fullWidth
              required
              label={translate.enteryourmessage}
              variant='outlined'
              multiline={true}
              minRows={5}
            />
            <Button style={{ marginTop: 25, display: "flex", }} size='large' color='primary' variant='contained'>{translate.sendmessage}</Button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.detailsGrid}>
            <Contact text1={translate.phone1} text2={translate.phone2} title={translate.phone} icon={<CallIcon className={classes.iconStyle} />} />
            <Contact text1="admin.sitename@example.com" text2="info.sitename@example.com" title={translate.email} icon={<EmailIcon className={classes.iconStyle} />} />
            <Contact text1={translate.addressdetail} text2="" title={translate.address} icon={<RoomIcon className={classes.iconStyle} />} />
          </Grid>
        </Grid>

      </Grid>


    </Grid>
  )
}

