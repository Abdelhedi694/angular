function calcul() {
  var nb1 = parseInt(document.querySelector("#nombre1").value);
  var nb2 = parseInt(document.querySelector("#nombre2").value);
  return nb1 + nb2;
}
document.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(calcul());
});
