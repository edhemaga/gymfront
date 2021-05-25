import React from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom'


function Item({item}){
    const classes = useStyles();

    return(

        <div className={classes.indItem}>
           
            <img className={classes.image} src={item.selectedFile[0]}></img>
            <h2 align="center" className={classes.text1}>{item.name}</h2>
            <h3 align="center" className={classes.text2}>{item.price}.00 BAM</h3>
            
        </div>
    );
}

export default Item;