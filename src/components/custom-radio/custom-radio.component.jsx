import React from "react";
import PropTypes from "prop-types";

import "./custom-radio.styles.scss";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, onClick: this.props.onClick };
  }

  toggle() {
    const { onChange } = this.context.radioGroup;
    const selected = !this.state.selected;
    this.setState({ selected });
    onChange(selected, this);
    this.state.onClick(this.props.children, this.props.parentIndex);
  }

  setSelected(selected) {
    this.setState({ selected });
  }

  render() {
    let classname = this.state.selected ? "active" : "";
    let index = this.props.children;
    let infoText;
    if (index === 1) {
      infoText = "לא מרוצה";
    } else if (index === 5) {
      infoText = "מאוד מרוצה";
    }

    return (
      <div className="container">
        <h5>{infoText}</h5>
        <button
          type="button"
          className={`${classname} scorebutton`}
          onClick={this.toggle.bind(this)}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

Radio.contextTypes = {
  radioGroup: PropTypes.object,
};

export default Radio;
