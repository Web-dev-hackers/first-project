let nameInput = document.getElementById("name");
let cardsCon = document.getElementById("cardsCon");
let desInput = document.getElementById("des");
let imageInput = document.getElementById("image");
let submitBtn = document.getElementById("submit-btn");
let card = document.getElementById("card");

submitBtn.onclick = () => {
  let newCard = card.cloneNode(true);
  newCard.style.display = "block";
  let nameValue = nameInput.value;
  let desValue = desInput.value;

  newCard.querySelector("img").setAttribute("src", "./pizza2.jfif");
  newCard.querySelector("h4").innerText = nameValue;
  newCard.querySelector("p").innerText = desValue;
  cardsCon.appendChild(newCard);
};
