

function getDate() {
  var d = new Date();
  var n = d.toDateString();
  document.getElementById("date").innerHTML = n;
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}





