import React from 'react';
import Item from './Item/Item';
import useStyles from './styles';
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'


function Items(){
    const items = useSelector((state)=> state.items);
    const classes = useStyles();


    return(
            !items.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                   {items.map((item) => (
                     <Grid key={item._id} item xs={12} sm={6} md={4}>
                         <Link to={`/${item._id}`}>
                            <Item item={item} />
                         </Link>
                     </Grid>
                    ))}
               </Grid>
            )
    );
}

export default Items;