const Normal_mode = document.querySelector(".bi-brightness-high");

const Dark_mode = document.querySelector(".bi-moon");

const cntn_container = document.querySelector(".cntnt_container");

Dark_mode.addEventListener("click", () => {
  document.body.classList.add("dark");
  Normal_mode.style.display = "inline-block";
  Dark_mode.style.display = "none";
  Normal_mode.style.color = "black";
  cntn_container.style.backgroundColor = "white";
});

Normal_mode.addEventListener("click", () => {
  document.body.classList.remove("dark");
  document.querySelector("body").style.backgroundColor = "#111828";
  Normal_mode.style.display = "none";
  Dark_mode.style.display = "inline-block";
  cntn_container.style.backgroundColor = "#111828";
<<<<<<< HEAD
});
=======
});
>>>>>>> 967147419f5f180e1db158e371cf4e1222f334e6
