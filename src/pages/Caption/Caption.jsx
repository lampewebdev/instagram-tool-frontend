import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
    const captionText = event.target.value;
    const newCaptionText = captionText.replace(/(?:\r\n|\r|\n)/g, "⁣\n");
    this.setState({ captionText: newCaptionText });
  };
  handleCopy = (text, result) => {
    const newText = text.replace(/(?:\r\n|\r|\n)/g, "⁣AAAAAAAAA");
    console.log(text, result);
    return newText;
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
        <Grid
          container
          // direction="column"
          justify="center"
          alignItems="center"
          spacing={8}
        >
          <Grid item xs={12} sm={8} lg={8}>
            <p>Please enter your caption</p>
          </Grid>
          <Grid item xs={12} sm={8} lg={8}>
            <EmojListInput
              captionText={captionText}
              handleChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={8}>
            <CopyToClipboard
              text={this.state.captionText}
              onCopy={this.handleCopy}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Copy Text
              </Button>
            </CopyToClipboard>
          </Grid>
          <Grid item xs={12} sm={8} lg={8}>
            <EmojList addEmoji={this.addEmoji} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Caption));
