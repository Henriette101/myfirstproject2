(function(window) {
	var sayWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(sayWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);