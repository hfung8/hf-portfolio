import React from 'react';
import Grid from '@material-ui/core/Grid';

const styleObj = {
    fontFamily: 'Montserrat',
    color: '#000000',
    fontSize: 44,
    backgroundColor: '#FFD700'
}

const styleAbout = {
    fontFamily: 'Raleway',
    fontSize: 25
}

function About(){

    return(
        <>
            <div style={styleObj}>About me</div>
            <Grid container justifyContent="center">
                <Grid item xs={6} container>
                    <p style={styleAbout}>
                    I am a Web Developer and Teaching Assistant at Columbia Engineering Coding Bootcamp and a MEd Candidate in Computer Science at Hunter College with plans to teach computer science in the New York City Public School System. Coding has been a passion of mine since completing the Rutgers Coding Bootcamp in 2017. Since then I’ve taught JavaScript, CSS3 and HTML5, jQuery, JavaScript, and Bootstrap, and have worked on mobile development with IOS apps, including Swift and Swift UI. 
                    </p>
                    <p style={styleAbout}>When I'm not working, I am an avid runner and soccer player. I have ran two marathons, and have played in various soccer leagues in NYC.</p>
                </Grid>
            </Grid>
        </>
    )
}

export default About;

