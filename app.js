const progressBar = document.querySelector(".progress-bar");
const circles = document.querySelectorAll(".circle");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let activeCircle = 1;

nextBtn.addEventListener("click", () => {
  if (activeCircle == circles.length) {
    activeCircle = circles.length;
  } else {
    activeCircle += 1;
  }

  update();
});
prevBtn.addEventListener("click", () => {
  if (activeCircle == 1) {
    activeCircle = 1;
  } else {
    activeCircle -= 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index + 1 <= activeCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  nextBtn.disabled = activeCircle == circles.length;
  prevBtn.disabled = activeCircle == 1;

  //console.log(((activeCircle-1)/(circles.length-1)*100)+"%")
  progressBar.style.width =
    ((activeCircle - 1) / (circles.length - 1)) * 100 + "%";
}
