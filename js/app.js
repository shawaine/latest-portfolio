const projects = document.querySelector("#projects");
const preloader = document.querySelector("#preloader");
const greeting = document.querySelector(".greeting");
const part = document.querySelector(".part");
const story = document.querySelector(".story");

/* hides the preloader after load*/
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
  }
};
window.addEventListener("scroll", function() {
  bgChanger();
  textSlider(greeting);
  textSlider(part);
  textSlider(story);
});

/* smooth scrolling*/
$(".branding").click(function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#home").offset().top
    },
    500,
    "linear"
  );
});
$(".arrow-down").click(function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top
    },
    500,
    "linear"
  );
});
// goes to a specified div
$('a[href*="#"]').on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    500,
    "linear"
  );
  // hies the side nav
  if ($(".menulist").hasClass("nav-active")) {
    $(".menulist").toggleClass("nav-active");
    animateNav($(".menulist").hasClass("nav-active"));
  }
});

/* burger */
$(".burger").on("click", () => {
  $(".menulist").toggleClass("nav-active");
  animateNav($(".menulist").hasClass("nav-active"));
});

const animateNav = flag => {
  let shade, trans, opa;
  if (flag) {
    shade = "brightness(50%)";
    trans = "0px";
    opa = 1;
  } else {
    shade = "brightness(100%)";
    trans = "50px";
    opa = 0;
  }
  $(".menulist li").css("transform", `translate(${trans},0)`);
  $(".menulist li").animate(
    {
      opacity: opa
    },
    1000
  );
  $("section, footer").css({
    filter: shade,
    webkitFilter: shade,
    mozFilter: shade,
    oFilter: shade,
    msFilter: shade
  });
};

/* hides the navbar*/
$("section").click(function(e) {
  e.preventDefault();
  if ($(".menulist").hasClass("nav-active")) {
    $(".menulist").toggleClass("nav-active");
    animateNav($(".menulist").hasClass("nav-active"));
  }
});
$(window).scroll(function() {
  if ($(".menulist").hasClass("nav-active")) {
    $(".menulist").toggleClass("nav-active");
    animateNav($(".menulist").hasClass("nav-active"));
  }
});
