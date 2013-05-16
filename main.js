/*
 * Name: 	main.js
 * Author: Rathino
 */

 window.main = function () {
 	var btn = document.getElementById("myBtn");
 	var handler = function () {
 		var text = document.getElementById("myWord").innerText;
 		if (text === "x") {
 			document.getElementById("myWord").innerText = "Javascript";
 		} else if(text === "Javascript"){
 			document.getElementById("myWord").innerText = "Hello World!";
 		} else {
 			document.getElementById("myWord").innerText = "x";
 		}
 	};

 	EventUtil.addHandler(btn, "click", handler);
 	//EventUtil.removeHandler(btn, "click", handler);
 }();