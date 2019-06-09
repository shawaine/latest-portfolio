const projects = document.querySelector("#projects");

function bgChanger() {
  if (this.scrollY > this.innerHeight / 2 + this.innerHeight / 4) {
    projects.classList.add("bg-transition");
    console.log("add");
  } else {
    projects.classList.remove("bg-transition");
    console.log("rm");
  }
}

window.addEventListener("scroll", bgChanger);
