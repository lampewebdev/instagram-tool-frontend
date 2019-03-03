import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <h1> Welcome </h1>
          <h3>The only IG Tool you will ever need</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
