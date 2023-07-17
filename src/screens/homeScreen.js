import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import './home.css';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { getTranslate } from "../localization/index";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    overflow: "Hidden",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: "block",
    }
  },
  divIcons: {
    marginTop: 25,
  },
  iconButtonStyle: {
    border: "2px solid #2e344e",
    height: 45,
    width: 45,
    marginRight: 8,
    marginLeft: 8,
    textAlign: 'center',
    lineHeight: 45,
    transition: "1s",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      transition: "1s",
    },
  },
}))

export default function HomeScreen() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <div className={classes.root}>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Grid>
        <Typography variant="h1">{translate.hi}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}</Typography>
        <Typography variant='subtitle1'>
          {translate.desc}
        </Typography>
        <div className={classes.divIcons}>
          <IconButton className={classes.iconButtonStyle} color="secondary">
            <TelegramIcon />
          </IconButton>
          <IconButton className={classes.iconButtonStyle} color="secondary">
            <LinkedInIcon />
          </IconButton>
          <IconButton className={classes.iconButtonStyle} color="secondary">
            <InstagramIcon />
          </IconButton>
        </div>
      </Grid>
    </div>
  )
}
