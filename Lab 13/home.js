$(function(){

    $("#button1").on("click", function(){
       //URL: "https://api.openbrewerydb.org/breweries";//no query string
       
       var url = "https://api.openbrewerydb.org/breweries";
      $.ajax(
        {
          url: url,
          type: "Get",
          success: function(data)
          {
            $("#results").text("");
            console.log(data);
            $.each(data,function(i,item){//parse items inside data array
              var para = $("<p></p>");
              para.text(item.name +" "+ item.id  +" "+ item.city);
              $("#results").append(para);
           });            
          }
        });
    }); 


    $("#button2").on("click", function(){          
        //URL: "https://api.openbrewerydb.org/breweries?by_city=cleveland"
        var searchTerm = $("#searchByCity").val();//query string #1
        var baseUrl = "https://api.openbrewerydb.org/breweries?by_city=";
        
        var sortBy = $("#sortBy").val();//query string #2
        var url = baseUrl + searchTerm + "&sort=-"+sortBy;
        
        $.ajax(
          {
            url: url,
            type: "Get",
            success: function(data)
            {
              $("#results").text("");
              console.log(data); //data.name, data.id and data.city
              $.each(data,function(i,item){ //parse items inside data array
                var para = $("<p></p>");
                para.text(item.name +" "+ item.id  +" "+ item.city);
                $("#results").append(para);
             });                        
            }
          });
      });

     $("#button3").on("click", function(){        
        /* Using the brewery's search functionality to find 
        a list of breweries by the search term
        Example: https://api.openbrewerydb.org/breweries/search?query=dog*/
      
        var searchTerm = $("#searchTerm").val();
        var baseUrl = "https://api.openbrewerydb.org/breweries/search?query=";
        var url = baseUrl + searchTerm;
        
        $.ajax(
          {
            url: url,
            type: "Get",
            success: function(data)
            {
              console.log(data); 
              $("#results").text("");              
              $.each(data,function(i,item){
                var para = $("<p></p>");
                para.text(item.name +" "+ item.id  +" "+ item.city);
                $("#results").append(para);
             });                        
            }
          });
    });
        
        /*Base URL = "https://api.openbrewerydb.org/breweries/search?query="
        The "search term" is from the input with id="searchTerm"
        This is appended it to the Base URL to get the full url
        The ajax method is called with the url
        A list of breweries return one by one, attached to the #results div
        */        
    

    $("#button4").on("click", function(){
        /* Using the search functionality of the breweries api with the ID
        Example: https://api.openbrewerydb.org/breweries/2

        Base url is "https://api.openbrewerydb.org/breweries/"
        
        Getting the ID of the brewery from the input with id = "breweryId"
        Appending it to the Base URL to get the url
        Then call the ajax method with the url
        The result will be one brewery
        Brewery's id, brewery_type and name are shown in the #results div
        */
        var searchTerm = $("#breweryId").val();
        var baseUrl = "https://api.openbrewerydb.org/breweries/";
        var url = baseUrl + searchTerm;
        
        $.ajax(
          {
            url: url,
            type: "Get",
            success: function(data)
            {
              $("#results").text("");
              console.log(data); 
                    
              $("#results").append(data.name, data.id, data.brewery_type);                                            
            }
          

          });

        });

  });
