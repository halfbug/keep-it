import React, { Component } from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import {deleteCredential} from '../actions/credentialActions'
import { connect } from 'react-redux'


class DeleteButton extends Component {
    handleDeleteClick = () => {
        console.log(this.props);
        this.props.deleteCredential(this.props.cid);
        // this.props.history.push('/');
        
      }
  render() {
    return (
       <IconButton
                      size="small"
                      aria-label="Delete"
                      onClick={this.handleDeleteClick}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteCredential: (id) => dispatch(deleteCredential(id))
    }
  }

  export default connect(null,mapDispatchToProps)(DeleteButton)  
