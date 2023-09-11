var speakWord = "Hello";

(function (window) {
  helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);