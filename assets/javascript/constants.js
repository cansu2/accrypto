/** *********************************

                         ,.
                        (_|,.
                       ,' /, )_______   _
                    __j o``-'        `.'-)'
    ACCRYPTO!      (")         $$      \'
                    `-j                |
                      `-._(           /
                         |_\  |  ^.  /
                        /_]'|_| /_)_/
                           /_]'  /_]'

Name: accrypto.html
Created by: DU Coding Academy, Group 5, 
            project 1
Date: 1/15/17
Copyright: Open for all use
URL: https://github.com/cansu2/accrypto

Links: constants.js, 
       main.html, index.html

Propose: The porpose of this file is to serve 
        as a variable constants file for all 
        other .js classes and methods that need
        to share variables

*********************************** **/



var basicTimeline = anime.timeline({
  autoplay: false
});

var pathEls = $(".check");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
  .add({
    targets: ".text",
    duration: 1,
    opacity: "0"
  })
  .add({
    targets: ".button",
    duration: 1300,
    height: 20,
    width: 300,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".progress-bar",
    duration: 1000,
    width: 300,
    easing: "linear"
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1
  })
  .add({
    targets: ".progress-bar",
    width: 80,
    height: 80,
    delay: 500,
    duration: 750,
    borderRadius: 80,
    backgroundColor: "#71DFBE"
  })
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 200,
    easing: "easeInOutSine"
  });

$(".button").click(function() {
  basicTimeline.play();
});

$(".text").click(function() {
  basicTimeline.play();
});

