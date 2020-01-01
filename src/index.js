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
  for (var x = 0; x < 5; x++) {
    console.log(x);
  }
  console.log(x);
  // var is accessible in a function
  // let is accessible in a block

  const i = 9;
  // i = 10; is not possible
}

// objects
const person = {
  name: "Ahmad",
  walk: function() {
    console.log(this);
  },
  talk() {
    console.log("I am talking");
  }
};

// call a method
person.talk();

// accessing properity
console.log(person.name);
// or using brackets
const z = "name";
console.log(person[z]);

// testing this
person.walk();
const walkFunction = person.walk; // this is a stand alone function outside of an object
console.log(walkFunction);
walkFunction(); // here we get undifined because the java strict mode is enabled

// in javascript es6 every function is an object
// testing bind this
person.walk();
const bindedWalkFunction = person.walk.bind(person); // this is a stand alone function outside of an object
console.log(bindedWalkFunction);
bindedWalkFunction(); // here we get undifined because the java strict mode is enabled
