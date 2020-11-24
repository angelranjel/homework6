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

document.getElementById("slower").addEventListener("click", function setplaybackRate() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function stplaybackRate() {
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function () {
	if (video.currentTime > 30) {
		video.currentTime = 0;
		video.play();
	}
	video.play();
	video.currentTime += 5;
});
