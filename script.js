
// "el" stands for the "element" that was just clicked
/*function addClass(el){
	el.classList.add("opaque");
}

*/
// "el" stands for the "element" that was just clicked
// password: 
function check() {
  x = document.getElementById("myPwd").value;
  if (x !== "heart") {
    alert("Try a different path");
    return false;
  }else {
window.location = "https://godofwolves.github.io/win/";
  }
}


function key()	{
  if (document.getElementById("hehe").src.match("images/y.PNG")) {
alert("I already gave you a hint");
  }else { 
    	document.getElementById("hehe").src = "images/y.png";
		document.getElementById("Eagle").loop = "true";

  }
}
