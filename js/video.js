var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	var vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector('#volumeSlider').addEventListener('change',function(){
	console.log(this);
	console.log(this.value);
	video.volume = this.value / 100;
	var vol = document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
});