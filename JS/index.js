let faqQuestion = document.querySelectorAll(".questions");

faqQuestion.forEach((question) => {
  question.addEventListener("click", () => {
    let answer = question.nextElementSibling;
    let image = question.querySelector(".click-icon");

    if (answer.classList.contains("open")) {
      answer.classList.remove("open");
      answer.style.maxHeight = null;
    } else {
      // Close all other answers
      document.querySelectorAll(".faq-answer").forEach((item) => {
        item.classList.remove("open");
        item.style.maxHeight = null;
      });
      answer.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    // Update the icon
    image.setAttribute(
      "src",
      answer.classList.contains("open")
        ? "./assets/images/icon-minus.svg"
        : "./assets/images/icon-plus.svg"
    );
  });
});
