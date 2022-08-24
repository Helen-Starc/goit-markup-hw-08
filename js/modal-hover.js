window.addEventListener("mouseover", mouseEnter, false);

window.addEventListener("mouseout", mouseLeave, false);

function mouseEnter(e) {
	/* if hovered node is NOT the registered
  || event listener...
  */
	if (e.target !== e.currentTarget) {
		// Reference hovered element
		var tgt = e.target;

		// Reference the first child with .hover
		var kid = tgt.querySelector(".hover");

		/* if hovered node has class .hover and
    || does NOT have a child with class .hover...
    */
		if (tgt.classList.contains("hover") && !kid) {
			// add class .outline to hovered node
			tgt.classList.add("outline");

			// Otherwise do nothing and end function
		} else {
			return;
		}

		// Stop the bubbling phase
		e.stopPropagation();
	}
}

function mouseLeave(e) {
	if (e.target !== e.currentTarget) {
		var tgt = e.target;
		tgt.classList.remove("outline");
	}
	e.stopPropagation();
}
