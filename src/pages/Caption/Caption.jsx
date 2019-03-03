import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import EmojList from "./EmojiList";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"]
  }
});

class Caption extends Component {
  state = {
    captionText: ""
  };

  handleChange = () => event => {
    this.setState({ captionText: event.target.value });
  };

  addEmoji = emoji => {
    const { captionText } = this.state;
    this.setState({ captionText: captionText + emoji });
  };

  render() {
    const { captionText } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              fullWidth
              multiline
              rows="10"
              value={captionText}
              className={classes.textField}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          </form>
          <EmojList addEmoji={this.addEmoji} />
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Caption));
