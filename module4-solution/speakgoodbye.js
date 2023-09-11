var speakWord = "Hi";

(function (window) {
  byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);