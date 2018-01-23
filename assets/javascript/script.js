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
 //jquery method for fading in the search bar on search screen
$(document).ready(function() {
  /**$(".hidden")
    .fadeIn(2000)
    .removeClass("hidden");**/
});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});

//dynamic click function that allows user to clikc to main.html 
$(document).on("click", "#search", function() {
    /**$("audio")[0].play();
      setTimeout(() => {
        
        
      }, 800);**/
      window.location.href = "main.html";
});

//dynamic click function that allows user to click logo to go to index.html 
$("div").on("click", "#logo", function() {
  /**$("audio")[0].play();
  setTimeout(() => {
    
  }, 800);**/
  window.location.href = "index.html";
});

//dynamic click function that takes info from the coincompare API and loads it into dynamic 
//cards on the main.html page 
$(document).on("click", ".searchClass", function(event) {

  event.preventDefault();
  var searchVar = $("#searchForm").val().trim();
  var price;
  var hrChange24; 
  var coinAbbrev;

  switch(searchVar.toLowerCase()){
    case 'bitcoin':
    coinAbbrev = 'BTC';
    break;
    case 'ethereum':
    coinAbbrev = 'ETH';
    break;


    default: '';
    } 
 console.log(coinAbbrev);

 $.ajax({
  url: "https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=BTC&tsym=USD",
  method: "GET"
})
.then(function(response){
  console.log(response)
  //check for CORE issures, chrome ext, or cores anywhere heroku


 $("#card-body").append('<div class="card"><div class="card-block"><h4 data-currencyName=' +searchVar+ ' class="card-subtitle mb-2 text-muted apiLink">'
  + searchVar + "</h4><p class='card-text cardtext'>Current Price</p><p class='card-text cardtext' id='current'>$"
  + price + "</p><p class='card-text cardtext'>Last 24 Hours</p><p class='card-text cardtext' id='lastWeek'>"
  + hrChange24 + "%</p>");
  
  console.log(price);
 })
});

$(document).on("click", ".apiLink", function(event) {

var clickedCurr = $(this).attr("data-currencyName")
console.log(clickedCurr);

//api call to cansu

});




/**$(document).on("click", "#login", function() {
  function playAudio() {
    $("audio").play();
  }

  window.location.href = "login.html";
});**/

/**$(document).on("click", "#signup", function() {
  function playAudio() {
    $("audio").play();
  }

  window.location.href = "signup.html";
});**/









