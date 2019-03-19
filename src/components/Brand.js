import React from "react";
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Lock from '@material-ui/icons/Lock';
// import { Link } from "react-router-dom";

const styles = theme => ({
    
    title: {
      flexGrow: 1,
      fontFamily: 'Candal',
    },
    logo : {
      
      backgroundColor: "#fff",
      color: theme.palette.secondary.main ,
      borderRadius: "15%",
      padding: "3px",
      margin: "2px",
      marginBottom: "-3px",
     
    // backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    
  });

const Brand = (props) => {
    const { classes } = props;
    //console.log (classes);
  return (
       

      <Typography
        component={props.component}
        variant={props.variant}
        color={props.color}
        noWrap
        className={classes.title}
        align={props.align}
      >
      <Lock className={classes.logo} fontSize="inherit" />
        Keep it
      </Typography>

      
    
  );
};
Brand.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Brand);
