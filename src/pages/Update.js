import React from 'react'

import Form from '../components/Form';

import  Single from  "../components/Single";

import { connect } from 'react-redux'
import {updateCredential} from '../actions/credentialActions'

class Update extends React.Component {

  updateCredential = (credential) => {
    // e.preventDefault();
    //credential.id = this.props.credentials.length+1
   // console.log(this.props.credentials.length) ;
    this.props.updateCredential(credential);
    // console.log(this.props.state);
    this.props.history.push('/detail/'+credential.id);
  }


  

  render() {

      const credentialForm = this.props.credential? (
      <Form saveCredential={this.updateCredential} credential={this.props.credential} />

        ):(
      <div className="center">Record not found...</div>
        );

  return (
    <Single>
    Update Credential
    <span>Update Website and login information here.</span>
    {credentialForm}
      
    </Single>
  )
}}


const mapStateToProps = (state,ownProps ) => {
 
  let id = parseInt(ownProps.match.params.cre_id);
  // console.log(id);
  return {
    credential: state.credentials.find(credential => credential.id === id)
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      updateCredential: (data) => dispatch(updateCredential(data))
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Update)
