import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  textField: {
    whiteSpace: "pre-line"
  }
});

class EmojiListInput extends Component {
  handleChange = () => event => {
    this.setState({ captionText: event.target.value });
  };

  render() {
    const { captionText, classes, handleChange } = this.props;
    const { container, textField } = classes;
    return (
      <form className={container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          fullWidth
          multiline
          rows="10"
          value={captionText}
          className={textField}
          onChange={handleChange()}
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(EmojiListInput);
