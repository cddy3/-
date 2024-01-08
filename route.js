document.getElementById("box1").addEventListener("click", function () {
  this.classList.toggle("box-expanded");
});

document.getElementById("box2").addEventListener("click", function () {
  this.classList.toggle("box-expanded");
});

function loginPage() {
  window.location.href = "login.html";
}
