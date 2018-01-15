$(document).ready(function() {
  //jquery method for fading in the search bar on search screen
  $(".hidden")
    .fadeIn(2000)
    .removeClass("hidden");
});




$(document).on("click", "#search", function() {

     function playAudio() {
      $("audio").play();
    
     }

  window.location.href = "main.html";
});



 