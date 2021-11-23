document.addEventListener("submit", function Addition(e) {
  e.preventDefault();
  let nbr1 = parseInt(document.querySelector("#nombre1").value);
  let nbr2 = parseInt(document.querySelector("#nombre2").value);
  console.log(nbr1 + nbr2);
});
