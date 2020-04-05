import React from "react";

import Radio from "../custom-radio/custom-radio.component";
import RadioGroup from "../custom-radio/custom-radio-group.component";

import "./question-field.styles.scss";

let names = [1, 2, 3, 4, 5];

class QuestionField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: this.props.question,
    };
  }

  render() {
    return (
      <div
        className={`${this.props.index % 2 === 0 ? "even" : ""} questionfield`}
      >
        <h3>{this.state.question}</h3>
        <RadioGroup name={this.props.index}>
          {names.reverse().map((index) => (
            <Radio parentIndex={this.props.index} onClick={this.props.onClick}>
              {index}
            </Radio>
          ))}
        </RadioGroup>
      </div>
    );
  }
}

export default QuestionField;
