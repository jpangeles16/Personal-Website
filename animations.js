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


/* General translation method for random bubble. Sets the bubble's 
position to a random position on the left hand side of the screen, then translates it until it
reaches the right of the screen. If you want to do this again, recursively call this.
*/
function moveRight(bubble) {
	var pos = -Math.round(Math.random() * 1000);
	var id = setInterval(frame, 10);

	// Set the top position
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