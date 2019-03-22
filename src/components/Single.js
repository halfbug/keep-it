import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root:{
    width: '100%',
    padding : 1,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    paddingTop: 3,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },
});

function Single(props) {
  const { classes, children } = props;
  //console.log(children);
  return (
      <React.Fragment>
    <Paper className={classes.root}>
      <div className={classes.section1} align="left">
        <Grid container >
          <Grid item xs>
            <Typography gutterBottom variant="h4" >
              {children[0]}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary">
          {children[1]}
        </Typography> 
        
       
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        {/* <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <div>
          <Chip className={classes.chip} label="Extra Soft" />
          <Chip className={classes.chip} label="Soft" />
          <Chip className={classes.chip} label="Medium" />
          <Chip className={classes.chip} label="Hard" />
        </div> */}
        {children[2]}
       
      </div>
      <div className={classes.section3}>
        {/* <Button variant="contained" color="primary" fullWidth>
          Add to cart
        </Button> */}
        { children[3]}
       
      </div>
    </Paper>
    </React.Fragment>
  );
}

Single.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Single);