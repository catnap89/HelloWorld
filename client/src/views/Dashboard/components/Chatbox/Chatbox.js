import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  
  TextField
} from '@material-ui/core';

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

const Chatbox = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
    
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
       
        title="Chat Log"
      />
      <Divider />
      <CardContent
        style={{
          minHeight: 675,
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

Chatbox.propTypes = {
  className: PropTypes.string
};

export default Chatbox;
