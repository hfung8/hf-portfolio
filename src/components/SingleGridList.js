import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from "@material-ui/core/ImageListItem";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)'
    },
    title: {
        color: "#40E0D0",
        fontSize: 20
    },
    titleBar: {
        background: 
        'linear-gradient(to top, rgba(0,0,0,0.7) 0% rgba(0,0,0,0.3) 70% rgba(0,0,0,0) 100%)',
    }
}));

export default function SingleLineGridList(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <ImageListItem key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionicon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                    <StarBorderIcon className={classes.title}/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

