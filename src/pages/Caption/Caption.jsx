import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import EmojListInput from "./EmojListInput";
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
    const { root } = classes;
    return (
      <div className={root}>
        <Grid container direction="column" justify="center" alignItems="center">
          <p>Please enter your caption</p>
          <EmojListInput
            captionText={captionText}
            handleChange={this.handleChange}
          />
          <EmojList addEmoji={this.addEmoji} />
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Caption));
