import React, { Component } from "react";
import PropTypes from "prop-types";
import { blueGrey800, red600 } from "material-ui/styles/colors";
import Checkbox from "material-ui/Checkbox";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import Divider from "material-ui/Divider";
import { ListItem } from "material-ui/List";

const listElementStyles = {
  color: blueGrey800,
  fontSize: 18,
  lineHeight: "24px"
};

const listElementCheckedStyles = {
  ...listElementStyles,
  textDecoration: "line-through"
};

class Todo extends Component {

  static propTypes = {
    todo: PropTypes.string
  };

  onClick = (event) => {
    this.props.handleRemove(this.props.id);
  }

  onCheck = (event) => {
    this.props.handleCheck(this.props.id);
  }

  render() {
    const { todo } = this.props;

    const listStyles = !this.props.checked
      ? listElementStyles
      : listElementCheckedStyles;
    return (
      <ListItem
        style={{ width: "90%" }}
        rightIconButton={
          <div style={{ display: "flex" }}>
            <IconButton
              tooltip="remove"
              tooltipPosition="bottom-right"
              onClick={this.onClick}
              iconStyle={{ color: red600 }}
            >
              <DeleteIcon />
            </IconButton>
            <Checkbox onCheck={this.onCheck} style={{ marginTop: 12 }} />
            
          </div>
        }
      >
        <div style={{ display: "flex" }}>
          <li style={listStyles}>{todo}</li>
        </div>
        <Divider />
      </ListItem>
    );
  }
}

export default Todo;
