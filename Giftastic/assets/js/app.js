	 //Giphy API Key: TGbi0yc7vp9Kg5pCAaIiHcnsgEtYnSs0
	 //"https://api.giphy.com/v1/gifs/search?api_key=dlBJEEg3yLQtOKfclJ2ukWFYJtJFRgi6&q=" + search + "&limit=10&offset=0&rating=g&lang=en&fmt=JSON"
	 
	
	 // Initial array of movies
      var searches = ["Inception", "The Matrix", "Mr. Nobody", "The Giver"];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displaySearchInfo() {

        var gifSearch = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ gifSearch +"&api_key=TGbi0yc7vp9Kg5pCAaIiHcnsgEtYnSs0&limit=10&offset=0&rating=g&lang=en";

        // Creating an AJAX call for the specific search button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
         
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var gifImages = $("<img>").attr("src", results[i].images.fixed_height.url);
            gifDiv.append(gifImages);

            $("#searches-view").prepend(gifDiv);
          };
          
         
          
        });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < searches.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of search-btn to our button
          a.addClass("search-btn");
          // Adding a data-attribute
          a.attr("data-name", searches[i]);
          // Providing the initial button text
          a.text(searches[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a search button is clicked
      $("#add-search").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var search = $("#search-input").val().trim();

        // Adding search from the textbox to our array
        searches.push(search);

        // Calling renderButtons which handles the processing of our searches array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "search-btn"
      $(document).on("click", ".search-btn", displaySearchInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();