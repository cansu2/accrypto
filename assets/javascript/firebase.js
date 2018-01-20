var searchArr = [];

$(".searchClass").on("click", function() {
  var searchVar = $("#searchForm")
    .val()
    .trim();

  searchArr.push(searchVar);
  console.log(searchArr);
  console.log("search variable: ", searchVar);
  searchCounter = 0;

  for (let i = 0; i < searchArr.length; i++) {
    searchCounter ++;
    localStorage.setItem(searchCounter, searchArr[i]);
  }
});
