//JQ DOM Traversal

$(function(){  //$(document).ready(function(){})
    
   console.log("hello");
   $("#button1").on("click",function(){
      $("#content").parent().css("border","5px darkgreen solid");      //traversing parent elements of button1 and changing their border and colors
      $("#content").parents().css("color","black");    
   });

   $("#button2").on("click",function(){                               //traversing parent elements of button2 ahd changing their background and font color
      $("#content").parents().css("background-color","lightgreen");    
      $("#content").parents().css("color","white");    
   });

   $("#button3").on("click",function(){
      $("#content").parentsUntil("#level3").css("border","dashed 5px yellow"); //limiting parent elements up to a certain element to change borders
      $("#content").parents().css("color","black");    
   });

   $("#button4").on("click",function(){
      //children are elements at a lower level in the hierarchy
      $("#content").children().css("border","3px dotted blue");
      console.log($("#content").children().length);
   });

   $("#button5").on("click",function(){
      //siblings are elements at the same level in the hierarchy
      $("#content").siblings().css("background-color","purple");
      $("#content").siblings().css("color","white");   
   });

   $("#button6").on("click",function(){
      var descendants = $("#content").find("p");// * means all descendants
      descendants.each(function(){
         $(this).css("background-color","lightgreen");
         console.log($(this).html());
      });
   });

   $("#button7").on("click", function(){                  //getting the next element relevant to content to change its background color
    $("#content").next().css("background-color", "yellow");
  });
 
  $("#button8").on("click", function(){
   $("#content").prev().css("background-color", "grey"); //changing the background color of the previous element to content
  });
  
  $("#button9").on("click", function(){
   $("#item1").closest("li").css("color", "orange"); //changing the color of the closest li item of item1
  });

  $("#button10").on("click", function(){
   $("li").first().css("background-color", "red"); //getting the first li element to change its background color
  });

  $("#button11").on("click", function(){
    $("li").last().css("background-color", "red"); //getting the last li element and changing its background color
   });

   $("#button12").on("click", function(){
    $("li").filter("#item2").css("background-color", "red"); //changing only item2's background color
   });
  
   $("#button13").on("click", function(){
    $("li").not("#item2").css("background-color", "red"); //changing background colors of li items unless they are item2
   });

   $("#button14").on("click", function(){
    $("li").slice(1,4).css("background-color", "red"); //using slice to change select li items' background color
   });

})
   
  
