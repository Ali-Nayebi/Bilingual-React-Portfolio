import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: 20,
    },
    main: {
        backgroundColor: "#191d2b",
        border: "1px solid #2e344e",
        borderTop: "5px solid #2e344e",
        zIndex: 1,
        padding: theme.spacing(8),
        transition: "0.4s",
        "&:hover": {
            borderTopColor: theme.palette.primary.main,
            transition: "0.4s",
        },
    },
    title: {
        textAlign: "left",
    },
    desc: {
        cursor: "pointer",
        "&:hover": {
            color: theme.palette.primary.main,
            transition: "1s",
        },
    },
    divIcon: {
        margin: 10,
        marginRight: 25,
        padding: 10,
        paddingBottom: 5,
        border: "1px solid #2e344e",
    },
    divDetails: {
        flex: 1, 
        display: "flex", 
        flexDirection: "column",
    },
}));

export default function Contact({ title, text1, text2, icon }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className={classes.main} container direction='row' justifyContent='flex-start' alignItems='center' >
                <div className={classes.divIcon}>
                    {icon}
                </div>
                <div className={classes.divDetails}>
                    <Typography className={classes.title} variant='h6'>{title}</Typography>
                    <Typography className={classes.desc} variant='body1'>
                        {text1}
                    </Typography>
                    <Typography className={classes.desc} variant='body1'>
                        {text2}
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}
