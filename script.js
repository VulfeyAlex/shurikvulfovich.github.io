const btnYes = document.getElementById("yes"), 
      btnNo = document.getElementById("no");

btnYes.addEventListener('click',checkAnswer);
btnNo.addEventListener('click',checkAnswer);

const answer = document.querySelector(".answer");

function checkAnswer(e) {
  console.log(this.id);
  if (this.id == "yes") {
    answer.innerHTML = "Окей, мне полегчало...";
    btnYes.classList.add("last_answer");
    btnNo.classList.remove("last_answer");
  } else {
    answer.innerHTML = "Жду ваш фидбек по e-mail адресу ниже!";
    btnYes.classList.remove("last_answer");
    btnNo.classList.add("last_answer");
  }
}
