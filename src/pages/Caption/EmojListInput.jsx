import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({});

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
          id="captionInput"
          tabIndex="0"
          fullWidth
          multiline
          rows="6"
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
