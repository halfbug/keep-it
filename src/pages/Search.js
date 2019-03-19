import React, { Component } from 'react'
import SimpleTable from '../components/SimpleTable.js'
import  Single from  "../components/Single";
import { connect } from 'react-redux'


//import {decrptr} from '../operations/crypto'
//import PropTypes from 'prop-types'

class Search extends Component {


  render() {
    //console.log(this.props);
    const {credentials} = this.props;
    const headers = ["Domains", "Options"];
    return (
      <Single>
        Search here
        <SimpleTable records={credentials} headers={headers}/>
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
