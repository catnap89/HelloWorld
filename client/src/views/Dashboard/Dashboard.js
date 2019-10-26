import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
 
  LatestSales,
  UsersByDevice,
  
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
      >
       
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
          
        >
          <UsersByDevice />
        </Grid>
        {/* <Grid */}
        {/* item
          // lg={8}
          // sm={6}
          // xl={3}
          xs={12}
        >
          <TotalUsers />
        </Grid> */}
        
      
      </Grid>
    </div>
  );
};

export default Dashboard;
