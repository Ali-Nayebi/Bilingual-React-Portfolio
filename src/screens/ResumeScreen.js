import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Title from "../components/Title";
import { getTranslate } from "../localization/index";
import Skill from '../components/Skill';
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MyStepper from '../components/MyStepper';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  skillGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5,
    }
  },
  aboutGrid: {
    paddingLeft: 30,
    paddingTop: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5,
    }
  },
  skillSecondTitle: {
    marginLeft: 10,
  },
}));

export default function ResumeScreen() {
  const classes = useStyles();
  const translate = getTranslate();

  return (
    <Grid justifyContent='flex-start' alignItems='flex-start' container className={classes.root}>
      <Grid className={classes.aboutGrid} item container xs={12}>

        <Title title={translate.myskills} />

        <Grid container direction='row'>
          <Grid item xs={12} md={6}>
            <Skill title="HTML5" value={80} />
            <Skill title="JavaScript" value={20} />
            <Skill title="React js" value={100} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skill title="React Native" value={10} />
            <Skill title="Node.js" value={50} />
            <Skill title="PHP" value={95} />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title={translate.resume} />
        <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
          <BusinessCenterIcon style={{ fontSize: 34, }} />
          <Typography className={classes.skillSecondTitle} variant='h4'>
            {translate.workingexperience}
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: 15, marginBottom: 15, }}>
          <MyStepper steps={translate.workingSteps} />
        </Grid>
        <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
          <LocalLibraryIcon style={{ fontSize: 34, }} />
          <Typography className={classes.skillSecondTitle} variant='h4'>
            {translate.educationalqualifications}
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: 15, marginBottom: 15, }}>
          <MyStepper steps={translate.educationalSteps} />
        </Grid>
      </Grid>
    </Grid>
  )
}
