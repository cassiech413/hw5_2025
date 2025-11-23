var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#slider").addEventListener("input", function() {
    let sliderValue = document.querySelector("#slider").value;
    video.volume = sliderValue / 100;
    document.querySelector("#volume").innerHTML = sliderValue + "%";
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Current location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted === false) {
        video.muted = true;
        document.querySelector("#mute").innerHTML = "Unmute";
        console.log("Muted");
    } else {
        video.muted = false;
        document.querySelector("#mute").innerHTML = "Mute";
        console.log("Unmuted");
    }
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Applied oldSchool effect");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Removed oldSchool effect");
});