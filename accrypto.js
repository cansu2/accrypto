console.log("here")
$("#etherium").on("click",function(){
  $.ajax({
  url: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,BCH,XRP,LTC",
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

$("#search-button").on("click",function(){
  event.preventDefault()
  var searchVal = $("#userInput").val()
  console.log(searchVal)

  $.ajax({
  // url: "https://min-api.cryptocompare.com/data/price?fsym="+ searchVal +"&tsyms=ETH,USD,EUR,BTC",

  url: "https://www.cryptocompare.com/api/data/coinsnapshot/?fsym="+searchVal+"&tsym=USD",
  method: "GET"
  })
  .then(function(response){
    console.log(response)
    var newP = $("<p>")
    newP.text(response.USD)

    $("#info-div").append(newP)



  })


})



$.ajax({
  url: "https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG",
  method: "GET"
})
.then(function(response){
  console.log(response)

})



//pushing to branch
