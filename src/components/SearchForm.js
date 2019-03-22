import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class SearchForm extends React.Component {
  state = {
    searchtxt: '',
    

  };

  handleSubmit = (e) => {
    e.preventDefault();
     console.log(this.state);
    this.props.searchCredential(this.state);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

    if (!e.target.value)
    this.props.reverseSearch();
  }

  render() {
    const { classes } = this.props;
    return(
    <form className={classes.container}   onSubmit={this.handleSubmit}>
    <Paper className={classes.root} elevation={1}>
     
      <InputBase className={classes.input} placeholder="Search Credential" id="searchtxt" onChange={this.handleChange}/>
      <IconButton className={classes.iconButton} aria-label="Search" type="submit" >
        <SearchIcon />
      </IconButton>
     
    </Paper>
    </form>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);