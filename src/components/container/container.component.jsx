import React from "react";

import QuestionField from "../question-field/question-field.component";

import "./container.styles.scss";

class Container extends React.Component {
  answers = {};

  constructor() {
    super();
    this.state = {
      0: [],
      1: [],
      2: [],
      answers: {},
      questions: [
        "האם ההזמנה בטלפון היתה נעימה וברורה",
        "האם השליח היה אדיב",
        "האם האוכל הגיע לשביעות רצונך",
      ],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, parentIndex) {
    this.answers[parentIndex] = index;
    console.log(this.answers);
  }

  render() {
    return (
      <div className="main">
        <span>
          הי זו עדי מפסטה לוקו רצינו לוודא שהכל היה נעים וטעים . נודה על מילוי
          משוב קצר
        </span>
        {this.state.questions.map((question, index) => (
          <QuestionField
            onClick={this.handleClick}
            question={question}
            index={index}
          ></QuestionField>
        ))}
        <button>שלח</button>
      </div>
    );
  }
}

export default Container;
