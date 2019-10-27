import React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles} from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  
} from '@material-ui/core';

import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const Chatusers = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
 

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="Users in Chat"
      />
      <Divider />
      <CardContent>
      
      </CardContent>
    </Card>
  );
};

Chatusers.propTypes = {
  className: PropTypes.string
};

export default Chatusers;
