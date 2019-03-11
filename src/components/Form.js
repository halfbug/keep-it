import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Form extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
    password: '',
    showPassword : false,
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container}  noValidate autoComplete="off">
      <div className={classes.full} fullWidth>
        <Grid container spacing={8} alignItems="flex-end" fullWidth>
          <Grid item>
          <Icon className={classes.icon} color="primary" fontSize="large">
        web
      </Icon>
          </Grid>
          <Grid item className={classes.full90} >
            <TextField id="standard-name"
          label="Web Address"
          variant="filled"
          fullWidth
          className={classes.textField100}
          placeholder="https/:www.somedomain.com/login"
          
          onChange={this.handleChange('name')}
          margin="normal"
           />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end" >
          <Grid item>
          <Icon className={classes.icon} color="primary" fontSize="large">
        person
      </Icon>
          </Grid>
          <Grid item>
            <TextField id="standard-name"
          label="User Name"
          className={classes.textField}
          placeholder="admin"
          variant="filled"
          onChange={this.handleChange('name')}
          margin="normal" />
          </Grid>
        </Grid>
      </div>


      <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end" >
          <Grid item>
          <Icon className={classes.icon} color="primary" fontSize="large">
        lock
      </Icon>
          </Grid>
          <Grid item>
          <TextField
          id="filled-adornment-password"
          className={ classes.textField}
          variant="filled"
          margin="normal"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
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
      <div className={classes.full} fullWidth>
        <Grid container spacing={8} alignItems="center" fullWidth>
          <Grid item alignItems="center">
          <Icon className={classes.icon} color="primary" fontSize="large">
        view_list
      </Icon>
          </Grid>
          <Grid item className={classes.full90} >
          <TextField
          id="filled-multiline-flexible"
          label="Detail"
          multiline
          rowsMax="4"
          
          onChange={this.handleChange('multiline')}
          className={classes.textField100}
          margin="normal"
          fullWidth
          variant="filled"
        />
          </Grid>
        </Grid>
      </div>

      <div className={classes.full} fullWidth>
        <Grid container spacing={20} alignItems="flex-end" fullWidth alignItems="center">
          <Grid item className={classes.full}>
          <Button variant="contained" color="primary" align="center" style={{marginTop: '2em'}} >
          Save
        </Button>
          </Grid>
        </Grid>
      </div>
      

        {/* <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
        /> */}
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
