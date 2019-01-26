var r = require.context("./css/", true, /\.css$/);

r.keys().forEach(r);

var video = document.querySelector("video");
var audio = document.querySelector("audio");

var play = document.querySelector(".play");
var replay = document.querySelector(".replay");
var volume = document.querySelector(".volume");
var berserk = document.querySelector(".berserk");

var cover = document.getElementById("cover");

cover.style.animation = "none";
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
  video.muted = !video.muted;
  this.innerHTML = "Volume:<br />" + (video.muted ? "OFF" : "ON");
};

berserk.onclick = function() {
  audio.play();
};

window.sound = function(v) {
  volume.innerHTML = "Volume:<br />" + (v ? "ON" : "OFF");
  video.muted = !v;
  video.onplay = null;
  video.play();
  cover.style.transition = "1s opacity";
  cover.style.webkitTransition = "1s opacity";
  cover.style.opacity = "0";
  cover.style.pointerEvents = "";
};

video.onplay = function() {
  video.pause();
};
