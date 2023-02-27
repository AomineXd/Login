const input = document.querySelector("input");

const username = document.querySelector(".Name"),
  senhas = document.querySelector(".Senha");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("Username")) {
    e.target.parentElement.classList.toggle("active");
    senhas.classList.remove("active");
  } else if (e.target.classList.contains("Senhasss")) {
    e.target.parentElement.classList.toggle("active");
    username.classList.remove("active");
  }
});

const oque = new Typed("#Text", {
  strings: ["Welcome to our Aplication"],
  typeSpeed: 100,
  backSpeed: 90,
  backDelay: 1500,
  showCursor: false,
});
