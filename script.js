onLoad();
function onLoad() {
  toggleButton();
  blur();
}

function toggleButton() {
  const myBox = document.getElementById("myBox");
  const myButton = document.getElementById("myButton");

  myButton.addEventListener("click", () => {
    myBox.classList.toggle("closed");
  });
}
function blur(){
  let Animated = document.querySelectorAll(".Animated");
  const myBox = document.getElementById("myBox");
  console.log(Animated[0]);
  myBox.addEventListener("mouseenter", () => {
    Animated[0].classList.add("hide");
  });
  myBox.addEventListener("mouseleave", () => {
    Animated[0].classList.remove("hide");
  });
  
  Animated[0].addEventListener("mouseenter", () => {
    Animated[0].classList.add("hide");
  });
  Animated[0].addEventListener("mouseleave", () => {
    Animated[0].classList.remove("hide");
  });
}

