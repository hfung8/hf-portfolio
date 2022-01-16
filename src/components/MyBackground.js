import React from 'react';
import Grid from '@material-ui/core/Grid';
import headshot from "../images/headshot/harrycircle.png";
import CSSBaseline from "@material-ui/core/CssBaseline";
import { Divider } from "@material-ui/core";

const styleAbout= {
    fontSize: 25, 
    fontFamily: 'Raleway'
}

const image = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const styleObj = {
    fontFamily: 'Montserrat',
    color: "#000000",
    fontSize: 44,
    backgroundColor: '#FFD700'
}

function MyBackground(){

    return (
        <>
            <Grid>
                <CSSBaseline />
                <Grid container style={image}>
                    <img src={headshot} alt="harrison's headshot" /><br/>
                    <div style={styleObj}>My Background</div>
                </Grid>
                <Divider variant="middle" />
                <Grid container justifyContent="center"><Grid item xs={6}><span style={styleAbout}>
                    Creative | Empathetic | Hard-Working<br/><Divider variant="middle"/>
                    I have a passion for coding and helping others to attain their coding goals. I'm a teaching assistant and tutor at both Rutgers and Columbia Engineering Coding Bootcamps.
                    </span></Grid></Grid>
            </Grid>
        </>
    )
}

export default MyBackground; 
