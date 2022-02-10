/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dominio = [".com", ".edu", ".org"];

  for (let i = 0; i <= pronoun.length - 1; i++) {
    for (let j = 0; j <= adj.length - 1; j++) {
      for (let k = 0; k <= noun.length - 1; k++) {
        for (let l = 0; l <= dominio.length - 1; l++)
          console.log(pronoun[i] + adj[j] + noun[k] + dominio[l]);
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
