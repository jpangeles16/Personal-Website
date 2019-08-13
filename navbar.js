/* JavaScript borrowed from online to manage navbar.
@author W3Schools and John Angeles
*/

$(document).ready(function() {
	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {myFunction()};

	// Get the navbar
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}

	/* Next chunk allows us to scroll to different parts of our website. */
	var homeButton = document.getElementById("home");

	var experienceButton = document.getElementById("experience");
	var experienceLocation = $(".experience").position();

	var aboutMeButton = document.getElementById("aboutme");
	var aboutMeLocation = $(".aboutMe").position();

	homeButton.onclick = function() {
		window.scrollTo(0, 0, "smooth");
	}

	experienceButton.onclick = function() {
		window.scrollTo(0, experienceLocation.top - 100, 'smooth');
	}

	aboutMeButton.onclick = function() {
		window.scrollTo(0, aboutMeLocation.top - 100, 'smooth');
	}
});