import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Brand from './Brand';


const styles = theme => ({
    
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
    heroTitle: {
        fontFamily: 'Candal',
        color: theme.primary,
      },
    heroUnit: {
      backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    },
    
  });
  

const HeroUnint = (props) => {
    const { classes } = props;
  return (
    <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            {/* <Typography className={classes.heroTitle}  component="h1" variant="h2"  align="center" color="textPrimary" gutterBottom>
             Keep it 
            </Typography> */}
            <Brand component="h1" variant="h2"  align="center" color="textPrimary" />
            <Typography  variant="h6" align="center" color="textSecondary" paragraph>
              A faster way to keep your all passwords with security. Easy to use and quick to execute.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        
  )
}

HeroUnint.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(HeroUnint);

