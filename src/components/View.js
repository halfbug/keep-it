import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Edit from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import IconButton from "@material-ui/core/IconButton";

class View extends Component {
  render(){
  const {record} = this.props;

  // let displayDetail ="";
  // for (const key in record) {
  //   let value = record[key];
    
  //   console.log(key+"-----"+value);

   
  // };

  // <Grid container direction="row" fullWidth alignItems="flex-end" justify="flex-end" >
  //  <Grid item xs={12}>
         
  //  <Link to={"/update/" + record.id}>
  //                   <IconButton
  //                     size="small"
  //                     color="secondary"
  //                     aria-label="Edit"
                     
  //                   >
  //                     <Edit />
  //                   </IconButton>
  //                   </Link>

  //                   <IconButton
  //                     size="small"
  //                     aria-label="Delete"
                      
  //                   >
  //                     <DeleteIcon fontSize="small" />
  //                   </IconButton>
  //    </Grid>
  //    </Grid>
  

  const displayDetail = Object.keys(record).filter(key => key !== "id").map(key =>
  
    <Grid container direction="row"  alignItems="flex-start" >
    <Grid item xs={2} justify="flex-start">
       <Typography  variant="body1" gutterBottom autoCapitalize="true"  color="primary" align="left" hidden>
      { key.toUpperCase()}
          </Typography>
           </Grid>
           <Grid item alignItems="flex-start" >
           <Typography variant="body2" gutterBottom>
           {record[key]}
           </Typography>
    </Grid> 
    </Grid>
  
  )

  

  return (
   <div fullWidth>
   
   
   {displayDetail}
        
      </div>
  )
}}

export default View
