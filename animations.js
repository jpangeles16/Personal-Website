/* Animations for homescreen
@author John Angeles
*/

var bubbleElement;
var clone;
var homeDivElement

/* Calls everything only when doc is ready. */
$(document).ready(function() {
	bubbleElement = document.getElementsByClassName("bubble")[0];
	homeDivElement = document.getElementsByClassName("intro")[0];
	moveRight(bubbleElement);
	// clone stuff
	var clone;
	for (var i = 0; i < 15; i ++) {
		clone = bubbleElement.cloneNode(true);
		homeDivElement.appendChild(clone);
		bubbleElement
		moveRight(clone);
	}
});


/* General translation method for random bubble. Sets the bubble's 
position to a random position on the left hand side of the screen, then translates it until it
reaches the right of the screen. If you want to do this again, recursively call this.
*/
function moveRight(bubble) {
	var pos = -Math.round(Math.random() * 1000);

	// Set the top position. Top will be a float value
	var top = Math.floor((Math.random() * homeDivElement.offsetHeight) + 1);
	bubble.style.top = top + 'px';

	// The sine counter
	var sineInput = Math.random() * 3.14;

	// Start calling frame
	var id = setInterval(frame, 10);


	function frame() {
		if (pos >= homeDivElement.offsetWidth) {
			// Stop calling this function
			clearInterval(id);

			// Change color
			randomlyChangeColorOfBubble(bubble);

			moveRight(bubble);
		} else {
			// Increment the position
			pos ++;
			bubble.style.left = pos + 'px'; 

			// Change top according to sine function
			sineInput += 0.01;
			bubble.style.top = (top + (30 * Math.sin(sineInput))) + 'px';
		}
	}
}

function coinFlip() {
	return (Math.floor(Math.random() * 2) == 0);
}

/* Pass in a bubble. Beware - color may or may not change!
*/
function randomlyChangeColorOfBubble(bubble) {
	if (coinFlip()) {
		bubble.src = "pics/bubble.png";
	} else {
		bubble.src = "pics/redbubble.png";
	}
}

// == These sets of animations are for the experience tabs. == //

var digitalProjectsInternTab = document.getElementsByClassName("digital-projects description");




