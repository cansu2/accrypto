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
         as a main file for sending and receiving 
         data from the firebase server. 

*********************************** **/

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
