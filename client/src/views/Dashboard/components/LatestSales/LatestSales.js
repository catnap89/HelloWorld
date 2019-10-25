import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// import { data, options } from './chart';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
    
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="Chat Log"
      />
      <Divider />
      <CardContent
        style={{
          minHeight: 680,
          overflow: 'auto'
        }}
      >

      

        <p>Some Chat text in here</p>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
       

        <TextField
          fullWidth
          id="outlined-full-width"
          InputLabelProps={{
            shrink: true,
          }}
          label="Chat"
          // helperText="Full width!"
          margin="normal"
          placeholder=""
          style={{ margin: 8 }}
          variant="outlined"
        />
      </CardActions>

     
    </Card>

    
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
