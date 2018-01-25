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
  $(".hidden")
    .fadeIn(2000)
    .removeClass("hidden");

  var searchVar = window.location.search.substr(8);

  if (searchVar != "undefined"){
    searchQuery(searchVar)
  } else {
    alert("search A coin");
  }

});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});

//dynamic click function that allows user to clikc to main.html
$(document).on("click", "#search", function() {

    var query = $("#searchFormInput").val();
    console.log(query);

    $("audio")[0].play();
      setTimeout(() => {
        
         window.location.replace("main.html?search="+query);
         //indexSearch = $('#usr')
         //indexSearch.text('#searchform');
      }, 4800);

});
 // var searchVar = window.location.search.substr(8);


//dynamic click function that allows user to click logo to go to index.html
$("div").on("click", "#logo", function() {
  $("audio")[0].play();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
  
});


function searchQuery(query){
  // var searchVar = $("#searchForm").val().trim();
  searchVar = query || $(".searchForm").val().trim();
  var hrChange24;
  var coinAbbrev;


  switch(searchVar.toLowerCase()){
    case 'bitcoin':
    coinAbbrev = 'BTC';
    break;
    case 'etherium':
    coinAbbrev = 'ETH';
    break;
    case 'litecoin':
    coinAbbrev = 'LTC';
    break;
    case 'ripple':
    coinAbbrev = 'XRP';
    break;
    case 'cardano':
    coinAbbrev = 'ADA';
    break;
    case 'monero':
    coinAbbrev = 'XMR';
    break;
    case 'neo':
    coinAbbrev = 'NEO';
    break;
    case 'nem':
    coinAbbrev = 'XEM';
    break;
    case 'stellar':
    coinAbbrev = 'XLM';
    break;
    case 'eos':
    coinAbbrev = 'EOS';
    break;
    case 'tron':
    coinAbbrev = 'TRX';
    break;
    case 'icon':
    coinAbbrev = 'ICX';
    break;
    case 'tether':
    coinAbbrev = 'USDT';
    break;
    case 'lisk':
    coinAbbrev = 'LSK';
    break;
    case 'qtum':
    coinAbbrev = 'QTUM';
    break;
    case 'bytecoin':
    coinAbbrev = 'BCN';
    break;
    case 'status':
    coinAbbrev = 'SNT';
    break;
    case 'bitshares':
    coinAbbrev = 'BTS';
    break;
    case 'ox':
    coinAbbrev = 'ZRX';
    break;
    case 'zcoin':
    coinAbbrev = 'XZC';
    break;
    case 'zclassic':
    coinAbbrev = 'ZCL';
    break;
    case 'bancor':
    coinAbbrev = 'BNT';
    break;
    case 'bitcore':
    coinAbbrev = 'BTX';
    break;
    case 'digixdao':
    coinAbbrev = 'DGD';
    break;
    case 'gas':
    coinAbbrev = 'GAS';
    break;
    case 'decred':
    coinAbbrev = 'DCR';
    break;
    case 'veritaseum':
    coinAbbrev = 'VERI';
    break;
    case 'zcash':
    coinAbbrev = 'ZEC';
    break;

    default: '';
    }
 console.log(coinAbbrev);
 $.ajax({
   url: "https://www.cryptocompare.com/api/data/coinsnapshot/?fsym="+coinAbbrev+"&tsym=USD",
  method: "GET"
})
.then(function(response){
  console.log(response)
  var newP = $("<p>")
  newP.text(response.USD)
  console.log(response.Data.AggregatedData.PRICE);
   console.log(response.Data.AggregatedData.LOW24HOUR);
   var price = response.Data.AggregatedData.PRICE
   var hrChange24 = response.Data.AggregatedData.LOW24HOUR




  //check for CORE issures, chrome ext, or cores anywhere heroku
 

 $("#card-body").prepend('<div class="card"><div class="card-block"><h4 data-currencyName='
 +searchVar+ ' class="card-subtitle mb-2 text-muted apiLink">'
  + searchVar + "</h4><p class='card-text cardtext'>Current Price</p><p class='card-text cardtext' id='current'>$"
  + price + "</p><p class='card-text cardtext'>Lowest in last 24 Hours</p><p class='card-text cardtext' id='lastWeek'>$"
  + hrChange24 + "</p>");

  console.log(price);
 })
}
//dynamic click function that takes info from the coincompare API and loads it into dynamic
//cards on the main.html page
$(document).on("click", ".searchClass", function(event) {

  event.preventDefault();
  searchQuery();
  
});


$(document).on("click", ".apiLink", function(event) {
  
  var clickedCurr = $(this).attr("data-currencyName") + "coin";
  console.log(clickedCurr);
  
  var queryURL = "https://newsapi.org/v2/everything?language=en&q=" + clickedCurr + 
    "&sortBy=popularity&apiKey=bcd8c23712344119ae60db38b2b3d1cd";
  
    $.ajax({
            url: queryURL,
            method: "GET"
          })
  
     .done(function(response) {
         console.log(queryURL); 
  
         var arrayTitles =[];
  
         for (var i = 1; i < 3; i++){
  
              var time  = response.articles[i].publishedAt;
  
              var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," "));
  
              var newDate = String(date).substr(4,11);
  
              arrayTitles.push(response.articles[i].title); 
  
              var title = response.articles[i].title + newDate;
  
              $("#card-body2").prepend('<div id="news"><h3 id="title-news">' + title + '</h3><p id="parag-news">' +response.articles[i].description +
              '</p><a href="link-news">' +response.articles[i].url+ '</a></div>');
  
            }
  
       })
  
  });
  
  //cansu




// $(document).on("click", ".apiLink", function(event) {
// var clickedCurr = $(this).attr("data-currencyName")
// console.log(clickedCurr);



// //api call to cansu


// $("#card-body2").append('<div class="card"><div class="card-block"><h4 data-currencyName='
//  +searchVar+ ' class="card-subtitle mb-2 text-muted apiLink">'
//   + searchVar + "</h4><p class='card-text cardtext'>Current Price</p><p class='card-text cardtext' id='current'>$"
//   + price + "</p><p class='card-text cardtext'>Last 24 Hours</p><p class='card-text cardtext' id='lastWeek'>"
//   + hrChange24 + '%</p><button class="removeMe btn btn-danger">Delete</button>');

// });

// $(document).on("click", ".remove", function(event) {
//       console.log($(this).parent(), 'removed this card');
//       $(this).parent().parent().remove();

// });


// news div javascript

//cansu

$(document).on("click", ".apiLink", function(event) {

   $(".card-body2").empty();

var clickedCurr = $(this).attr("data-currencyName")
console.log(clickedCurr);

var queryURL = "https://newsapi.org/v2/everything?q=" + clickedCurr + 
  "&apiKey=bcd8c23712344119ae60db38b2b3d1cd";

  $.ajax({
          url: queryURL,
          method: "GET"
        })

   .done(function(response) {
      console.log(response);
       
       console.log(response.articles[1].url);

       console.log(response.articles[1]);


       var arrayTitles =[];

       for (var i = 1; i < 4; i++){

            var time  = response.articles[i].publishedAt;

            var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," "));

            var newDate = String(date).substr(4,11);

            arrayTitles.push(response.articles[i].title); 

            var title = response.articles[i].title



            $(".card-body2").append('<br><div id="news"><h3 id="title-news">' + title + '</h3><h3 id ="date">'+ " " + newDate+'</h3><p id="parag-news">' +response.articles[i].description +
            '</p><a href="link-news" id="link-news">'+response.articles[i].url+ '</a></div>');

          }

     })

});

//cansu


// news div javascript







