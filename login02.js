function entrar() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email == "admin@admin.com" && senha == "admin") {
    alert("sucesso");
    location.href = "boletimProfesso.html";
  } else {
    alert("senha ou email incorretos");
  }
}
const botao = document.getElementById("b1");
const audio2 = document.getElementById("up");

botao.addEventListener("click", () => {
  audio2.play();
});
