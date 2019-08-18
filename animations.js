/* Animations for homescreen
@author John Angeles
*/

var bubbleElement;
var clone;
var homeDivElement

$(document).ready(function() {
	bubbleElement = document.getElementsByClassName("bubble")[0];
	homeDivElement = document.getElementsByClassName("intro")[0];
	moveRight(bubbleElement);
	// clone stuff
	var clone;
	for (var i = 0; i < 25; i ++) {
		clone = bubbleElement.cloneNode(true);
		homeDivElement.appendChild(clone);
		moveRight(clone);
	}
});


// Simple translation downwards
// function fallDown() {
// 	var pos = 0;
// 	var id = setInterval(frame, 10);

// 	function frame() {
// 		if (pos == homeDivElement.offsetHeight) {
// 			clearInterval(id);
// 		} else {
// 			pos ++;
// 			bubbleElement.style.top = pos + 'px'; 
// 		}
// 	}
// }

// // Simple translation upwards
// function moveRight() {
// 	var pos = -50;
// 	var id = setInterval(frame, 10);

// 	function frame() {
// 		if (pos >= homeDivElement.offsetWidth) {
// 			clearInterval(id);
// 			moveRight();
// 		} else {
// 			pos ++;
// 			bubbleElement.style.left = pos + 'px'; 
// 		}
// 	}
// }

// // Simple translation upwards for clone only (testing)
// function moveCloneRight() {
// 	var pos = -25;
// 	var id = setInterval(frame, 10);

// 	function frame() {
// 		if (pos >= homeDivElement.offsetWidth) {
// 			clearInterval(id);
// 			moveCloneRight();
// 		} else {
// 			pos ++;
// 			clone.style.left = pos + 'px'; 
// 		}
// 	}
// }

/* General translation method for random bubble. Sets the bubble's 
position to a random position on the left hand side of the screen, then translates it until it
reaches the right of the screen. If you want to do this again, recursively call this.
*/
function moveRight(bubble) {
	var pos = -25;
	var id = setInterval(frame, 10);
	var top = Math.floor((Math.random() * homeDivElement.offsetHeight) + 1);
	bubble.style.top = top + 'px';


	function frame() {
		if (pos >= homeDivElement.offsetWidth) {
			clearInterval(id);
			moveRight(bubble);
		} else {
			pos ++;
			bubble.style.left = pos + 'px'; 
		}
	}
}