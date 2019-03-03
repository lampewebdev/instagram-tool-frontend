import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import EmojiListITems from "./EmojiListITems";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 500,
    height: 300
  },
  emoji: {
    cursor: "pointer"
  }
});

class ImageGridList extends Component {
  handleClick = event => {
    const { addEmoji } = this.props;
    addEmoji(event.target.textContent);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={32} className={classes.gridList} cols={20}>
          {EmojiListITems.map((emoji, index) => (
            <GridListTile key={Math.random()}>
              <p className={classes.emoji} onClick={this.handleClick}>
                {emoji}
              </p>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
