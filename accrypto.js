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
  url: "https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG",
  method: "GET"
})
.then(function(response){
  console.log(response)

})



//pushing to branc
