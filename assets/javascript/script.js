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
        as general linking file for most generic 
        html and js links that involve style. It 
        also serves as a conduit to link AJAX calls 
        to main.html.

*********************************** **/

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

  var name = 'Tester';
  var price = 34;
  var hrChange24 = 23

  event.preventDefault();

  //var card = $('<div class="card">');
  //var cardBlock  = $('<div class="card-block">');
  //var header = $('<h6 class="card-subtitle mb-2 text-muted">');
  //header.text('NAME VAR FROM API');
  //var current = $('<p class="card-text" id="current">')
  //current.text('CURRENT VAR FROM API');
  //var hrChange24 = $('<p class="card-text" id="hrChange24">')
  //hrChange24.text('CHANGE VAR FROM API');
  //card.append(cardblock);
  //cardblock.append(header);
  //cardblock.append(current);
  //cardblock.append(hrChange24);
  //$('tbody').append(card);

 $("#card-body").append('<div class="card"><div class="card-block"><h4 class="card-subtitle mb-2 text-muted">'
  + name + "</h4><p class='card-text cardtext'>Current Price</p><p class='card-text cardtext' id='current'>$"
  + price + "</p><p class='card-text cardtext'>Last 24 Hours</p><p class='card-text cardtext' id='lastWeek'>"
  + hrChange24 + "%</p>");
  

  console.log(price);
  //console.log(cardBlock);

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







