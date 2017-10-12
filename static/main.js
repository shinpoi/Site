var domain_url = "http://aoi-lucario.org";


///////////////////////////////////////////////////////

function set_head_image() {
	var a = parseInt(Math.random()*19);
	var img = document.getElementById("head_img");
	img.src = "/common/" + String(a) + ".jpg";
}

window.onload = function () {
	set_head_image();
};
