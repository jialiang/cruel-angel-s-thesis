var r = require.context("./css/", true, /\.css$/);

r.keys().forEach(r);

var video = document.querySelector("video");
var audio = document.querySelector("audio");

var play = document.querySelector(".play");
var replay = document.querySelector(".replay");
var volume = document.querySelector(".volume");
var berserk = document.querySelector(".berserk");

var cover = document.getElementById("cover");

cover.style.opacity = "1";
cover.style.pointerEvents = "auto";
video.volume = 0.75;

play.onclick = function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

replay.onclick = function() {
  video.loop = !video.loop;
  this.innerHTML = "Replay:<br />" + (video.loop ? "ON" : "OFF");
};

volume.onclick = function() {
  video.volume = video.volume ? 0 : 0.75;
  this.innerHTML = "Volume:<br />" + (video.volume ? "ON" : "OFF");
};

berserk.onclick = function() {
  audio.play();
};

window.sound = function(v) {
  video.muted = !v;
  video.onplay = null;
  video.play();
  cover.style.opacity = "";
  cover.style.pointerEvents = "";
};

video.onplay = function() {
  video.pause();
};
