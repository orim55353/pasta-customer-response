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
      text: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(index, parentIndex) {
    this.answers[parentIndex] = index;
    console.log(this.answers);
  }

  handleSubmit() {
    const templateId = "pastatemp";
    var text = "";
    var answers = this.answers;
    this.questions.forEach(function (question, index) {
      text += question + ": ";
      text += (answers[index] ? answers[index] : "לא נענתה ") + ", \n";
    });
    text += "תשובה בטקסט חופשי: " + this.state.text;
    console.log(text);
    this.sendFeedback(templateId, {
      send: text,
    });
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    return (
      <div className="main">
        <img src={Logo} alt="logo" />
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
        <textarea
          onChange={this.handleChange}
          placeholder="כתוב לנו משהו אישי"
        ></textarea>
        <button onClick={this.handleSubmit} className="send">
          שלח
        </button>
      </div>
    );
  }
}

export default Container;
