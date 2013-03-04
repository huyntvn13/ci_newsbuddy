
define(["jquery", "easing"], function($) {
	function addEventListenerToBodyElems() {
		$('article#cards #cards-prev-link').click(function(event) {
			event.preventDefault();
		});
		$('article#cards #cards-next-link').click(function(event) {
			event.preventDefault();
		});
	}
	
	return {
		addEventListenerToBodyElems: addEventListenerToBodyElems
	}
});