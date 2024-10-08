import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let text;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  text = "Good morning";
  customStyle.color = "green";
} else if (currentTime < 18) {
  text = "Good afternoon";
  customStyle.color = "red";
} else {
  text = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {text}
  </h1>,
  document.getElementById("root")
);