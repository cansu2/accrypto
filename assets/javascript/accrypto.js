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
        as a main testing and deployment file
        for ajax calls to the various web 
        servers. 

*********************************** **/

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#etherium").on("click",function(){
  $.ajax({
  url: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR",
  method: "GET"
  })
  .then(function(response){
    console.log(response)
    var newP = $("<p>")
    newP.text(response.USD)

    $("#etherium").append(newP)



  })

})


$("#bitcoin").on("click",function(){
  $.ajax({
  url: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=ETH,USD,EUR",
  method: "GET"
  })
  .then(function(response){
    console.log(response)
    var newP = $("<p>")
    newP.text(response.USD)

    $("#bitcoin").append(newP)



  })

})



$.ajax({
  url: "https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=BTC&tsym=USD",
  method: "GET"
})
.then(function(response){
  console.log(response)
  //check for CORE issures, chrome ext, or cores anywhere heroku
})



//pushing to branc
