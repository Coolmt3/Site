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

var btnSubscribe = document.getElementById("btnSubmitSubscribe");

    btnSubscribe.addEventListener("click", function (evt) {

        evt.preventDefault();

        var subscribe = document.querySelector("[name=subscribe]");

        console.log(subscribe.value); //writes 'newsletter'

        return false;

    });
	
function validateInterest(evt) {

    evt.preventDefault();

    var mininterest = document.querySelectorAll("[name=mininterest]");

    var count = 0,
        interests = [];

    for (var i = 0; i < mininterest.length; i++) {

        if (mininterest[i].checked) {
            count++;
            interests.push(mininterest[i].value);
        }

    }

    //This is meant to mimic where you would make a fetch POST call
    if (count > 1) {

        addToLog("enough interests selected: " + interests);

    } else {

        addToLog("**NOT ENOUGH** interests selected: " + interests);

    }

    return false;

}

 function bindStateChanges(){

    var interests = document.querySelectorAll("[name=interest");

    for (var index = 0; index < interests.length; index++) {

        interests[index].addEventListener("change", function(evt){

            var checkbox = evt.target;

            addToLog(checkbox.value + " changed to " + checkbox.checked);

        });

    }

}