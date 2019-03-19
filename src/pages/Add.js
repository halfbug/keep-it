import React from 'react'

import Form from '../components/Form';

import  Single from  "../components/Single";

import { connect } from 'react-redux'
import {addCredential} from '../actions/credentialActions'

class Add extends React.Component {

  addCredential = (credential) => {
    // e.preventDefault();
    credential.id = this.props.credentials.length+1
    console.log(this.props.credentials.length) ;
    this.props.addCredential(credential);
    // console.log(this.props.state);
    this.props.history.push('/Search');
  }
  render() {
  return (
    <Single>
    Add Credential
    <span>Add Website and login information here.</span>
      <Form saveCredential={this.addCredential}  />
    </Single>
  )
}}


const mapStateToProps = (state) => {
 
  return {
    credentials: state.credentials
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addCredential: (data) => dispatch(addCredential(data))
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Add)
