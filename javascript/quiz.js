function counter() {
  var o11 = document.getElementById("o11");
  var o23 = document.getElementById("o23");
  var o32 = document.getElementById("o32");
  var o43 = document.getElementById("o43");
  var o54 = document.getElementById("o54");
  document.getElementById("result").innerHTML =
    Number(o11.checked) +
    Number(o23.checked) +
    Number(o32.checked) +
    Number(o43.checked) +
    Number(o54.checked) +
    "/5" +
    " " +
    "pont";
  document.getElementById("result").style.backgroundColor =
    "rgb(224, 224, 224)";
}
