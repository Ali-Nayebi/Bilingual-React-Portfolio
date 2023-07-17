import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography, Button } from '@material-ui/core';
import Title from "../components/Title";
import { getTranslate } from "../localization/index";
import MainImage from "../assets/images/profile2.jpg";
import Service from '../components/Service';
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  aboutGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  ImageGrid: {
    // height: 400,
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      right: 0,
      top: "auto",
      bottom: 0,
      height: "65%",
      // borderRadius: 100,
      width: 15,
      background: "rgba(3, 127, 255, 0.6)",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      // bottom: 0,
      height: "65%",
      // borderRadius: 100,
      width: 15,
      background: "rgba(3, 127, 255, 0.6)",
    },
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: "block",
    }
  },
  aboutTextGrid: {
    paddingRight: 20,
    paddingLeft: 20,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginTop: 15,
      marginBottom: 15,
    }
  },
  iconStyle: {
    fontSize: 46,
    color: theme.palette.primary.main,
  },
}))

export default function AboutScreen() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid justifyContent='flex-start' alignItems='flex-start' container className={classes.root}>
      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={translate.aboutme} />
        <Grid className={classes.mainAbout} container direction='row'>
          <Grid className={classes.ImageGrid} item xs={12} md={6}>
            <img className={classes.mainImage} src={MainImage} alt={translate.name} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.aboutTextGrid}>
            <Typography variant="h3">{translate.hi}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}</Typography>
            <Typography variant='body1' style={{ marginTop: 10, }}>
              {translate.desc}
            </Typography>
            <Typography style={{ marginTop: 10, }} variant='body1'>
              <b style={{ minWidth: 100, display: "inline-block", }}>{translate.fullname}</b>
              {' : '}
              {translate.name}
            </Typography>
            <Typography style={{ marginTop: 5, }} variant='body1'>
              <b style={{ minWidth: 100, display: "inline-block", }}>{translate.age}</b>
              {' : '}
              {translate.years}
            </Typography>
            <Typography style={{ marginTop: 5, }} variant='body1'>
              <b style={{ minWidth: 100, display: "inline-block", }}>{translate.nationality}</b>
              {' : '}
              {translate.iranian}
            </Typography>
            <Typography style={{ marginTop: 5, }} variant='body1'>
              <b style={{ minWidth: 100, display: "inline-block", }}>{translate.languages}</b>
              {' : '}
              {translate.farsi}, {translate.english}
            </Typography>
            <Typography style={{ marginTop: 5, }} variant='body1'>
              <b style={{ minWidth: 100, display: "inline-block", }}>{translate.phone}</b>
              {' : '}
              {translate.phonenumber}
            </Typography>
            <div style={{ display: "flex", marginTop: 20, }}>
              <Button variant='contained' color="primary">
                {translate.downloadcv}
              </Button>
            </div>
          </Grid>
        </Grid>

      </Grid>

      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={translate.services} />
        <Grid container direction='row'>
          <Service icon={<WebIcon className={classes.iconStyle} />} title={translate.webdesign} desc={translate.servicedesc} />
          <Service icon={<CodeIcon className={classes.iconStyle} />} title={translate.webdevelopment} desc={translate.servicedesc} />
          <Service icon={<PhoneAndroidIcon className={classes.iconStyle} />} title={translate.mobileapplication} desc={translate.servicedesc} />
        </Grid>
      </Grid>

    </Grid>
  )
}
