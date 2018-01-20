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

$(document).on("click", ".searchClass", function(event) {

  event.preventDefault();

  var card = $('<div class="card">');
  var cardBlock  = $('<div class="card-block">');
  /**var header = $('<h6 class="card-subtitle mb-2 text-muted">');
  header.text('NAME VAR FROM API');
  var current = $('<p class="card-text" id="current">')
  current.text('CURRENT VAR FROM API');
  var hrChange24 = $('<p class="card-text" id="hrChange24">')
  hrChange24.text('CHANGE VAR FROM API');**/
  card.append(cardblock);
  /**cardblock.append(header);
  cardblock.append(current);
  cardblock.append(hrChange24);**/
  $('tbody').append(card);


  

  console.log(card);
  console.log(cardBlock);

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







