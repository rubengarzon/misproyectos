function showAll() {
  for (let index = 1; index < 7; index++) {
    document.getElementById(index).style.display = "flex";
  }
}

function filterAngular() {
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.getElementById("6").style.display = "none";
}

const goToGithub = (id) => {
  if (id === 1) {
    window.open("https://github.com/rubengarzon/noticiasapp");
  } else if (id === 2) {
    window.open("https://github.com/rubengarzon/peliculasApp");
  }
};
