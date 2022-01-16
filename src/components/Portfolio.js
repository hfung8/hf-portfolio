import React from 'react';
import Grid from '@material-ui/core/Grid';

const styleObj = {
    fontFamily: 'Montserrat',
    color: '#000000',
    fontSize: 44,
    backgroundColor: '#FFD700'
}

const styleProjects = {
    fontFamily: 'Raleway',
    fontSize: 30
}

const stylePortfolio = {
    fontFamily: 'Raleway',
    fontSize: 16
}

const stylePortfolioTitle = {
    fontFamily: 'Raleway',
    fontSize: 25,
    color: "#40E0D0"
}

function Portfolio(){

    return(
        <>
            <div style={styleObj}>Portfolio</div>
            <Grid container>
                <Grid container item xs={4}>
                    <p style={styleProjects}>To go to a project, click on the project title</p>
                </Grid>
                <Grid item xs={4}>
                    <a target="_blank" rel="noreferrer noopener" href="https://hfung8.github.io/OHU">
                        <h2 style={stylePortfolioTitle}>ORPHANS OF HOPE UGANDA</h2>
                    </a>
                    <p  style={stylePortfolio}>Technologies used: CSS3 for design, HTML5 for framework</p>
                </Grid>
                <Grid item xs={4}>
                    <a target="_blank" rel="noreferrer noopener" href="https://hfung8.github.io/cards/">
                        <h2 style={stylePortfolioTitle}>CARD RENDERER</h2>
                    </a>
                    <p style={stylePortfolio}>Technologies used: CSS3, HTML5, JavaScript</p>
                </Grid>
                <Grid item xs={4}>
                    <a target="_blank" rel="noreferrer noopener" href="https://sevensecondsapp.herokuapp.com/">
                    <h2 style={stylePortfolioTitle}>SEVEN SECONDS</h2>
                    </a>
                    <p style={stylePortfolio}>Technologies used: HTML5, CSS3, JavaScript, jQuery, NOde JS and Heroku. Created landing, about, and biography pages (Biography page accessible after clicking first thumbnail). Used JavaScript to allow video to play when mouse enters thumbnail.</p>
                </Grid>
                <Grid item xs={4}>
                    <a target="_blank" rel="noreferrer noopener" href="https://hfung8.github.io/react-calculator/">
                        <h2 style={stylePortfolioTitle}>CALCULATOR CREATED WITH REACT</h2>
                    </a>
                    <p style={stylePortfolio}>Technologies used: React, React-Bootstrap</p>
                </Grid>
            </Grid>
        </>
    )
}

export default Portfolio; 
