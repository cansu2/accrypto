$(document).ready(function() {
  //jquery method for fading in the search bar on search screen
  $(".hidden")
    .fadeIn(2000)
    .removeClass("hidden");
});

$(document).on("click", "#search", function() {
    $("audio")[0].play();
      setTimeout(() => {
        
        window.location.href = "main.html";
      }, 800);
   

  
});

$(document).on("click", "#login", function() {
  function playAudio() {
    $("audio").play();
  }

  window.location.href = "login.html";
});

$(document).on("click", "#signup", function() {
  function playAudio() {
    $("audio").play();
  }

  window.location.href = "signup.html";
});

$('div').on("click", "#logo", function() {
  function playAudio() {
    $("audio").play();
  }

  window.location.href = "index.html";
});



$('tbody').append('<tr><th scope="row">1</th><td>' + snapshot.name + '</td><td>' + snapshot.dest + '</td><td>' + snapshot.trainTime + '</td><td>' + snapshot.freq + '</td></tr>');