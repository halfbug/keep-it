import React, { Component } from 'react'
import  Single from  "../components/Single";
import { connect } from 'react-redux'
//import {decrptr} from '../operations/crypto'
import View from '../components/View'
import Edit from "@material-ui/icons/Edit";
import DeleteButton from '../components/DeleteButton'
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom'
import Chip from '@material-ui/core/Chip';
import FileCopy from '@material-ui/icons/FileCopy';





 class Detail extends Component {

 handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
  }

  componentDidUpdate() {
    if(!this.props.credential)
    this.props.history.push("/Search");
 }

 

  render() {
    const credential = this.props.credential? (
        <div>
        <View record={this.props.credential}  > </View>
        
        </div>
     
    ) : (
      <div className="center">Loading credential...</div>
    );

    const optButton = this.props.credential? (
    <React.Fragment>
    <div>Detail 
          <Link to={"/update/" + this.props.credential.id}>
                    <IconButton
                      size="small"
                      color="secondary"
                      aria-label="Edit"
                     
                    >
                      <Edit />
                    </IconButton>
                    </Link>

                    <DeleteButton
                      size="small"
                      aria-label="Delete"
                     cid ={this.props.credential.id}
                    >
                     
                    </DeleteButton>
            </div> 
                    <Chip
                      icon={<FileCopy />}
                      label="Copy to Clipboard"
                      onClick={this.handleClick}
                      variant="outlined"
                    />
                    
                    </React.Fragment>
                    ):(
                      <div onLo className="center">No Record found ...</div>
                      
                    );
    
    return (
      <Single>
        {optButton}
      {credential}
      </Single>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.cre_id);
  // console.log(id);
  return {
    credential: state.credentials.find(credential => credential.id === id)
  }
}



export default connect(mapStateToProps)(Detail)