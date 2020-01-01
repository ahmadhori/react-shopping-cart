import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World again</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById("root"));
sayHello();

function sayHello() {
  for (let index = 0; index < 5; index++) {
    console.log(index);
  }
}
