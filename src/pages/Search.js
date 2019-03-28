import React, { Component } from 'react'
import SimpleTable from '../components/SimpleTable.js'
import  Single from  "../components/Single";
import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm'


//import {decrptr} from '../operations/crypto'
//import PropTypes from 'prop-types'

class Search extends Component {
  state = {
   credentials: this.props.credentials,
    action : 'default',

  };

  searchCredential = (credeintialQuery) => {
    const {credentials} = this.props;
    //  console.log(credeintialQuery) ;
     let resultedCredentials = credentials.filter((credential) => { 
      //  console.log(credential.domain)
      //  console.log(credential.domain.includes(credeintialQuery.searchtxt))
       if (credential.domain.toLowerCase().includes(credeintialQuery.searchtxt.toLowerCase())) {
        // console.log(credential)
        return credential

       }
       
       else
       return false
      } );

      console.log(resultedCredentials);
      this.setState({
       credentials: resultedCredentials,
       action : "search",
      })
      
    
  }
  reverseSearch = () => {
    this.setState({
      credentials: this.props.credentials,
      action : "default",
     })
     console.log("Updated internal search results")
   }


  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if ((props.credentials.length !== state.credentials.length)&& state.action === "default") {
      return {
       
        credentials: props.credentials,
      };
    }
    return null;
  }

  render() {
    //console.log(this.props);
    const {credentials} = this.state;
    const headers = ["Domains", "Options"];
    return (
      <Single>
        <SearchForm searchCredential={this.searchCredential} reverseSearch={this.reverseSearch} />
        <SimpleTable records={credentials} headers={headers} reverseSearch={this.reverseSearch} />
      </Single>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    credentials : state.credentials
  }
}
export default connect(mapStateToProps)(Search)
