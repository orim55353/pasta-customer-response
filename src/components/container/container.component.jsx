import React from "react";

import QuestionField from "../question-field/question-field.component";

import "./container.styles.scss";

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

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.status);
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  };

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="main">
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
        <button onClick={this.handleSubmit} className="send">
          שלח
        </button>
      </div>
    );
  }
}

export default Container;
