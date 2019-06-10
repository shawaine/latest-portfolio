const projects = document.querySelector("#projects");
const preloader = document.querySelector("#preloader");
const greeting = document.querySelector(".greeting");
const part = document.querySelector(".part");
const story = document.querySelector(".story");

/* hide the preloader after load*/
window.addEventListener("load", () => {
  preloader.classList.add("preloader-done");
});

/* bg changer in projects */
function bgChanger() {
  if (this.scrollY > this.innerHeight / 2 + this.innerHeight / 4) {
    projects.classList.add("bg-transition");
  } else {
    projects.classList.remove("bg-transition");
  }
}

/* slide triger in about*/

const textSlider = element => {
  if (this.scrollY > document.body.scrollHeight / 2) {
    element.classList.add("slide");
  } else {
    element.classList.remove("slide");
    console.log("asdasdsadf");
  }
};

window.addEventListener("scroll", function() {
  bgChanger();
  textSlider(greeting);
  textSlider(part);
  textSlider(story);
});

/* smooth scrolling*/

$('a[href*="#"]').on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    500,
    "linear"
  );
});

/* sending email */
