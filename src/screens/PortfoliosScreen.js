import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Title from "../components/Title";
import { getTranslate } from "../localization/index";
import Portfolio from '../components/Portfolio';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    padding: 30,
    paddingTop: 60,
    width: "100%",
    [theme.breakpoints.down('xs')]: {
      paddingRight: 10,
      paddingLeft: 10,
    },
  },
}));

export default function PortfoliosScreen() {
  const classes = useStyles();
  const translate = getTranslate();

  return (
    <div className={classes.root} >
      <Title title={translate.portfolios} />
      <Grid item xs={12} container direction='row' justifyContent='flex-start' alignItems='center'>
        {translate.portfolioslist.map((portfolio) =>
          <Portfolio key={portfolio.id} href="https://reactdeveloper.ir"
            title={portfolio.title} desc={portfolio.desc} image={portfolio.image} />
        )}
      </Grid>
    </div>
  )
}
