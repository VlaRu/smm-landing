
const acc = document.querySelectorAll(".accordion");
const answerPanel = document.querySelectorAll(".panel");
const icon = document.querySelectorAll(".icon-answ");

function showAccordion(){
  acc.forEach((el, index) => {
    el.addEventListener('click', () => {
      if (answerPanel[index].style.display === "block") {
        answerPanel[index].style.display = "none";
      } else {
        answerPanel[index].style.display = "block";
      }

      icon[index].classList.toggle("open-accordeon");
      accordion.classList.toggle("active");
    });
  });
}

showAccordion();
