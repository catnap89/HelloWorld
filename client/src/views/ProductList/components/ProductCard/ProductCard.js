import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  // Grid,
  Divider,
  Button,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {},
  // imageContainer: {
  //   height: 60,
  //   width: 60,
  //   margin: '0 auto',
  //   border: `1px solid ${theme.palette.divider}`,
  //   borderRadius: '5px',
  //   overflow: 'hidden',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // image: {
  //   width: '100%'
  // },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
      
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>

        <Divider />
        
        <Typography
          // align="center"
          variant="body1"
        >
          {product.description}
        </Typography>
        


      </CardContent>
      
      <CardActions>
        {/* <Grid
          container
          justify="space-between"
        > */}
        <RouterLink to="/">
         <Button   size="small">Join Chat</Button>
        </RouterLink>

        {/* </Grid> */}
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
