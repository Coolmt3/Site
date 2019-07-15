document.getElementById('date').innerHTML = new Date().toDateString();

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var checkboxValues = {};
$(":checkbox").each(function(){
  checkboxValues[this.id] = this.checked;
});
$.cookie('checkboxValues', checkboxValues, { expires: 7, path: '/' })

function repopulateCheckboxes(){
  var checkboxValues = $.cookie('checkboxValues');
  if(checkboxValues){
    Object.keys(checkboxValues).forEach(function(element) {
      var checked = checkboxValues[element];
      $("#" + element).prop('checked', checked);
    });
  }
}