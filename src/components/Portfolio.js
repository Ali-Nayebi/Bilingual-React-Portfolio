import React, { useState } from 'react';
import { Grid, Modal, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 15,
        display: "flex",
        flexDirection: 'column',
        marginBottom: 15,
    },
    image: {
        width: "100%",
        cursor: "pointer",
        "&:hover": {
            transform: "rotate(360deg)",
            transition: "1s",
        },
    },
    title: {
        textAlign: "left",
        cursor: "pointer",
        "& a": {
            textDecoration: "none",
            color: "#fff",
            transition: "0.4s",
            "&:hover": {
                color: theme.palette.primary.main,
                transition: "0.4s",
            },
        },
    },
    modalimage: {
        width: "100%",
        height: "100%",
    },
    modal: {
        width: "60%",
        height: "70%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 60,
        [theme.breakpoints.down('xs')]: {
            width: "90%",
            height: "50%",     
        },
    },
}));


export default function Portfolio({ image, title, desc, href }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <>
            <Grid className={classes.root} item lg={4}>
                <img
                onClick={()=>setOpen(true)}
                className={classes.image} src={image} alt={title} />
                <Typography className={classes.title} variant='h5'><a href={href}>{title}</a></Typography>
                <Typography variant='body1'>{desc}</Typography>
            </Grid>
            <Modal className={classes.modal} open={open} onClose={() => setOpen(false)}>
                <img className={classes.modalimage} src={image} alt={title} />
            </Modal>
        </>
    )
}
