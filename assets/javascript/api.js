
      var animals = ["Dolphin","Chicken", "Crab", "Cat", "Dog", "Horse", "Bird", "Turkey","Cow", "Turtle", "Goldfish", "Rabbit"];

      function renderButtons() {

        $("#animals-view").empty();

         for (var i = 0; i < animals.length; i++) {

         var a = $("<button>");

          a.addClass("animal");

          a.attr("data-name", animals[i]).css({"background-color":"lightblue", "font-size":"30px"});

         $("#add-animal").css({"background-color":"lightblue", "font-size":"20px", "float": "center"});

          a.text(animals[i]);

         $("#animals-view").append(a);
        }
      }

  
        $("#add-animal").on("click", function(event) {
       
        event.preventDefault();

        var animal = $("#animal-input").val().trim();
        
        animals.push(animal);

        renderButtons();
      });

      
      renderButtons();


      $(document).on('click', "button", function () {
        
        var value = $(this).html()

        $("#animals").empty();

        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        value + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        })

    
        .done(function(response) {
         
         var results = response.data; //
         for (var i = 0; i < results.length; i++) {

           
            var animalDiv = $("<div>");

            
            var p = $("<p>").text("Rating: " + results[i].rating);

            
            var animalImage = $("<img>");
            
            animalImage.attr("src", results[i].images.fixed_width.url);

           
            animalDiv.append(p, animalImage);

            
            $("#animals").prepend(animalDiv);
          }
        });
      });


