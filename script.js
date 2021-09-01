"use strict";
let faqBtn = document.querySelectorAll("details");

faqBtn.forEach(function (questions) {
  questions.addEventListener("click", function () {
    if (questions.hasAttribute("open")) {
      questions.setAttribute("open", "");
    } else {
      faqBtn.forEach(function (questions) {
        questions.removeAttribute("open");
      });
    }
  });
});
