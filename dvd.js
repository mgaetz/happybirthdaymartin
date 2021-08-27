const section = document.querySelector("section");
const logo = document.querySelector(".logo");
const logo2 = document.querySelector(".logo2");
const FPS = 60;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// Logo moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 3;
let ySpeed = 3;
let xPosition2 = window.innerWidth - logo2.width -10;
let yPosition2 = window.innerHeight - logo2.height - 10;
let xSpeed2 = -3;
let ySpeed2 = -3;

function update() {
  logo.style.left = xPosition + "px";
  logo.style.top = yPosition + "px";
  logo2.style.left = xPosition2 + "px";
  logo2.style.top = yPosition2 + "px";
}

setInterval(() => {
  if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
  }
  if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;
  }

  if (xPosition2 + logo2.clientWidth >= window.innerWidth || xPosition2 <= 0) {
    xSpeed2 = -xSpeed2;
  }
  if (yPosition2 + logo2.clientHeight >= window.innerHeight || yPosition2 <= 0) {
    ySpeed2 = -ySpeed2;
  }

  xPosition += xSpeed;
  yPosition += ySpeed;
  xPosition2 += xSpeed2;
  yPosition2 += ySpeed2;

  update();
}, 1000 / FPS);


window.addEventListener("resize", () => {
  xPosition = 10;
  yPosition = 10;
  xPosition2 = window.innerWidth - logo2.width -10;
  yPosition2 = window.innerHeight - logo2.height - 10;

  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});