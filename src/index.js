// await/async, etc
require("@babel/polyfill");
require("./index.css");

class Bar {
  doStuff() {
    document.getElementsByTagName("h1")[0].style.color = "black";
  }
}

var b = new Bar();
b.doStuff() // "stuff"
