	 //Giphy API Key: TGbi0yc7vp9Kg5pCAaIiHcnsgEtYnSs0
	 //"https://api.giphy.com/v1/gifs/search?api_key=dlBJEEg3yLQtOKfclJ2ukWFYJtJFRgi6&q=" + search + "&limit=10&offset=0&rating=g&lang=en&fmt=JSON"
	 
	
	 // Initial Array of searches
      var searches = ["Plane", "Boat", "Spaceship", "Tesla"];

      // FUNCTION#1 - Dynamically creates buttons for items found in Initial Array.
      function renderButtons() {

        // Deleting the search buttons prior to adding new search button
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the Initial Array
        for (var i = 0; i < searches.length; i++) {

          // Dynamicaly generates buttons for each search in Initial Array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of search-btn to each button
          a.addClass("search-btn");
          // Adding a data-attribute to each button
          a.attr("data-name", searches[i]);
          // Providing the initial button text
          a.text(searches[i]);

          

          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // FUNCTION #2 - Attaches API to each rendered button.
      function displaySearchInfo() {

        var gifSearch = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ gifSearch +"&api_key=TGbi0yc7vp9Kg5pCAaIiHcnsgEtYnSs0&limit=10&offset=0&rating=g&lang=en";

        // Creating an AJAX call for the specific search button being clicked
        $.ajax({url: queryURL, method: "GET"}).then(function(response) {
          
          var results = response.data;
          console.log(results);
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>"); //Creates div to store gifs
            gifDiv.addClass("flex");//Gives flex positioning to elements in div

            var gifImages = $("<img>");//Creates image tags
            gifImages.attr("class", "animate"); //Gives each newly created image a class of animate.
            //Basically building the image element in the gif pause class activity.
            // When the gifs populate you want them to appear "still" so you set the image tag source to the still url.
            gifImages.attr("src", results[i].images.original_still.url);
            gifImages.attr("data-still", results[i].images.original_still.url);
            gifImages.attr("data-animate", results[i].images.original.url);
            gifImages.attr("data-state", "still");
            
            //Dumps all newly created image tags in the div designated to store gifs
            gifDiv.append(gifImages);
            $("#searches-view").prepend(gifDiv);

          };
          
        });

      }

     //Function #3 - Animating the still gifs
      $(document).on("click", ".animate", function() {
        //this - refering to the element with the class "animate"
        var state = $(this).attr("data-state");
     //Intentionally set the data state to still so that when clicked it will change the source to the animated url AND change the data-state
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    
    });


      //FUNCTION #4: Makes the Add Search Button Work
      $("#add-search").on("click", function(event) {
        event.preventDefault();
        //Grabs the input from the textbox
        var search = $("#search-input").val().trim();

        // Puts the input into the Initial Array.
        searches.push(search);

        // Calling renderButtons which handles the processing of our searches array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "search-btn"
      $(document).on("click", ".search-btn", displaySearchInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();