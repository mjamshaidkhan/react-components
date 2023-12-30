import React from "react";
import IconCheck from "./IconCheck";
import IconUnchecked from "./IconUnCheck";

export default class Button extends React.Component {
  constructor(props,onChecked) {
    super(props);
    this.state = {
      checked: false,
    };

    this.icon = this.icon.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  icon() {
    return this.state.checked ? <IconCheck /> : <IconUnchecked />;
  }

  toggle(event) {
    event.preventDefault();
    this.setState((state, props) => {
      return {
        checked: !state.checked,
      };
    });
    this.props.onChecked(!this.state.checked)
  }

  render() {
    return (
      <button style={Styles.button} onClick={this.toggle}>
        <div style={Styles.check}>{this.icon()}</div>

        <div>{this.props.children}</div>
      </button>
    );
  }
}

const Styles = {
  button: {
    border: "0",
    marginBottom: "0.5rem",
    fontSize: "1rem",
    display: "flex",
    outline: "0",
    color: "#33CAFF",
    marginRight: "0.5rem",
    cursor: "pointer",
    textAlign: "left",
  },
  check: {
    marginRight: "1rem",
    marginTop: "1px",
  },
};
