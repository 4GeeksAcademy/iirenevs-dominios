/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Datos individuales de los dominios.

  let articles = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let tlds = [".com", ".net"];

  let domainNames = [];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }

  document.querySelector("#generate").onclick = () => {
    document.querySelector("#domain").innerHTML = `<h1>${
      domainNames[Math.floor(Math.random() * domainNames.length)]
    }</h1>`;
  };
};
