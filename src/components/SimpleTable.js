import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Pageview from "@material-ui/icons/Pageview";
//import Fab from '@material-ui/core/Fab';
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import DeleteButton from '../components/DeleteButton'

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: "80%"
  },
  fab: {
    margin: theme.spacing.unit
    //fontsize : "small",
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const data = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

class SimpleTable extends Component {
  render() {
    const { classes } = this.props;
    const { records, headers } = this.props;
    //console.log(records);

    //console.log(optionsButtions);
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {headers.map(n => (
                <TableCell>{n}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map(n => (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.domain}
                </TableCell>
                <TableCell align="left">
                  <div>
                    <Link to={"/detail/" + n.id}>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="Add"
                        className={classes.fab}
                      >
                        <Pageview />
                      </IconButton>
                    </Link>

                    <Link to={"/update/" + n.id}>
                    <IconButton
                      size="small"
                      color="secondary"
                      aria-label="Edit"
                      className={classes.fab}
                    >
                      <Edit />
                    </IconButton>
                    </Link>

                    <DeleteButton
                      size="small"
                      aria-label="Delete"
                      className={classes.fab}
                      cid={n.id}
                      reverseSearch={this.props.reverseSearch} 
                    >
                      <DeleteIcon fontSize="small" />
                    </DeleteButton>
                  </div>
                </TableCell>

                {/* <TableCell align="right">{n.calories}</TableCell>
              <TableCell align="right">{n.fat}</TableCell>
              <TableCell align="right">{n.carbs}</TableCell>
              <TableCell align="right">{n.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
