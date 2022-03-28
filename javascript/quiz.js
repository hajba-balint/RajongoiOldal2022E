function counter() {
  var o11 = document.getElementById("o11");
  var o21 = document.getElementById("o21");
  var o31 = document.getElementById("o31");
  var o43 = document.getElementById("o43");
  var o51 = document.getElementById("o51");
  document.getElementById("result").innerHTML =
    Number(o11.checked) +
    Number(o21.checked) +
    Number(o31.checked) +
    Number(o43.checked) +
    Number(o51.checked) +
    "/5" +
    " " +
    "pont";
    document.getElementById("result").style.backgroundColor = "rgb(224, 224, 224)";
}


