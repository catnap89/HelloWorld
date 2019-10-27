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

  // here is the card on the screen thats the chatbox i set a minimum height so it fills the screen and added overflow auto so as people type into the chat they can scroll to look back.

  return (
    <Card
    
      {...rest}
      className={clsx(classes.root, className)}
    >

      {/* title of the card is here */}
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
{/* input data for the Chat goes here to pring on screen */}
        <p>Some Chat text in here</p>

      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
       
       {/* this is the text input box, helpertext is like placeholder so its been removed. */}
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
