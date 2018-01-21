<!DOCTYPE html>

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

Propose: 
*********************************** **/

<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Reddit Testing</title>
</head>

<body>
  <button id="cat-button">Reddit</button>
  <div id="images">
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    // Event listener for our cat-button
    $("#cat-button").on("click", function() {

      var queryURL = "https://www.reddit.com/api/v1/authorize?client_id=lxIhDFaPx_w0OoUqQaECcfaG3Pg&response_type=code&state=" + state + "&redirect_uri=https://cansu2.github.io/&duration=temporary&scope=mysubreddits";


      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var catImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        // Prepending the catImage to the images div
        $("#images").prepend(catImage);
      });
    });
  </script>
</body>

</html>