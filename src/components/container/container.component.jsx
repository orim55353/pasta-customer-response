import React from "react";

import QuestionField from "../question-field/question-field.component";

import "./container.styles.scss";

import Logo from "../../assets/Pasta_loco_logo.png";

class Container extends React.Component {
  answers = {};
  questions = [
    "האם ההזמנה בטלפון היתה נעימה וברורה",
    "האם השליח היה אדיב",
    "האם האוכל הגיע לשביעות רצונך",
  ];

  constructor() {
    super();
    this.state = {
      name: "תגובת משתמש",
      email: "orim553@gmail.com",
      message: "11111",
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
        <img src={Logo} />
        <span>
          הי זו עדי מפסטה לוקו רצינו לוודא שהכל היה נעים וטעים . נודה על מילוי
          משוב קצר
        </span>
        {this.questions.map((question, index) => (
          <QuestionField
            onClick={this.handleClick}
            question={question}
            index={index}
          ></QuestionField>
        ))}
        <h3>מסר אישי</h3>
        <textarea placeholder="כתוב לנו משהו אישי"></textarea>
        <button onClick={this.handleSubmit} className="send">
          שלח
        </button>
      </div>
    );
  }
}

export default Container;
