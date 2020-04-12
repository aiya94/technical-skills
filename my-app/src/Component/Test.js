import React from "react";
import { func } from "prop-types";

//new String() ""

//refuctory function
// JS not react
function createCircle() {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

//constructor function
function Circle(radius) {
  //reference to the object that executing this piece of code
  // console.log("this", this)
  // Circle {}
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

Circle.call(window, 1);
// reference this object {}
// same as const another = new Circle(1)

Circle.apply({}, [1, 2, 3]);
// arrays

//backtick character
const Circle1 = new Function(
  "radius",
  `
 this.radius = radius;
this.draw = function() {
 console.log('draw');
}`
);

const circle = new Circle1(1);
const another = new Circle(1);

function App() {
  return (
    // react fragment
    <>
      {this.createCircle}
      {this.Circle}
    </>
  );
}

//function is object , every object have constructor

// value type(primitive) : number , string, symbol. null, undefined, boolean
//copied by their value
//primitive value store inside variable
let x = 10;
let y = x;
x = 20;

// Reference type: obkect, func, Arrays
// reference, point same object in memory
//copied by their references
let x = { value: 10 };
let y = x;
x.value = 20;

let number = 10;
function increase(number) {
  number++;
}
increase(number);

let number = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
