const container = document.querySelector("#container");
const submitButton = document.querySelector(".submit-button");
const scoreNumber = document.querySelectorAll(".score-number li");

submitButton.addEventListener("click", () => {
  if (score == "" || score == undefined) {
  } else {
    showThankYou(score);
  }
});

let score;

scoreNumber.forEach((element) => {
  const selectedScore = element.innerText;

  element.addEventListener("click", () => {
    scoreNumber.forEach((li) => li.classList.remove("active"));

    element.classList.add("active");

    score = selectedScore;
  });
});

let index = score - 1;
function showThankYou(score) {
  container.innerHTML = `
                <div id="thank-you">
          <img src="./images/illustration-thank-you.svg" alt="illustration-thank-you">
          <div class="selected-rating">
            <p>You selected <span>${score}</span> out of 5</p>
          </div>
    
          <div class="thank-you-message">
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If
              you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        </div>
    `;
}
