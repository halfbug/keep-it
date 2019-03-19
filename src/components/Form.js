import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
//import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  textField100: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:"100%",
    
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  full: {
    width: "100%",
    display:"block",
  },
  full90: {
    width: "89%",
    
  },
  icon: {
    // margin: theme.spacing.unit * 2,
    color:  theme.palette.secondary.main ,
    // marginRight:1,
    fontSize:50,

  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color:  theme.palette.secondary.main ,
    },
  },
});


class Form extends React.Component {
  state = {
    id: '',
    domain: '',
    username: '',
    multiline: 'Controlled',
    password: '',
    detail: '',
    showPassword : false,

  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.saveCredential(this.state);
  }

  componentDidMount() {
    if(this.props.credential){
       console.log(this.state);
      console.log(this.props.credential);
     // const {id,domain,username,password,detail} = this.props.credential

      this.setState(state => ( this.props.credential));
      // this.setState(state => ({ domain: this.props.credential.domain }));
    //   // return({id,domain,username,password,detail} = initalstate );
     
       
    //    ));
     console.log("newState");
     console.log(this.state);
     
    }
   
 }

  render() {
    const { classes } = this.props;
    //console.log(this.state);

    return (
      <form className={classes.container}   onSubmit={this.handleSubmit}>
      <div className={classes.full} >
        <Grid container spacing={8}  >
          <Grid item>
          {/* <Icon className={classes.icon} color="primary" fontSize="large">
        web
      </Icon> */}
          </Grid>
          <Grid item className={classes.full90} >
            <TextField id="domain"
          label="Web Address"
          onChange={this.handleChange}
          value={this.state.domain}
          className={classes.textField100}
          placeholder="https/:www.somedomain.com/login"
          
          
          margin="normal"
           />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid container spacing={8}  >
          <Grid item>
          {/* <Icon className={classes.icon} color="primary" fontSize="large">
        person
      </Icon> */}
          </Grid>
          <Grid item>
            <TextField id="username"
          label="User Name"
          className={classes.textField}
          placeholder="admin"
          onChange={this.handleChange}
          value={this.state.username}
          margin="normal" />
          </Grid>
        </Grid>
      </div>


      <div className={classes.margin}>
        <Grid container spacing={8}  >
          <Grid item>
          {/* <Icon className={classes.icon} color="primary" fontSize="large">
        lock
      </Icon> */}
          </Grid>
          <Grid item>
          <TextField
          id="password"
          className={ classes.textField}
          //
          margin="normal"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
          </Grid>
        </Grid>
      </div>
      <div className={classes.full} >
        <Grid container spacing={8} >
          <Grid item >
          {/* <Icon className={classes.icon} color="primary" fontSize="large">
        view_list
      </Icon> */}
          </Grid>
          <Grid item className={classes.full90} >
          <TextField
          id="detail"
          label="Detail"
          multiline
          rowsMax="4"
          value={this.state.detail}
          onChange={this.handleChange}
          className={classes.textField100}
          margin="normal"
          
          //
        />
          </Grid>
        </Grid>
      </div>

      <div className={classes.full} >
        <Grid container spacing={24}   alignItems="center">
          <Grid item className={classes.full}>
          <Button variant="contained" type="submit" color="primary" align="center" id="submit-btn" style={{marginTop: '2em'}} >
          Save
        </Button>
          </Grid>
        </Grid>
      </div>
      

        
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
