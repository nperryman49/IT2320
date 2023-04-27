$(function(){


var containerWidth = $("#container").width();
var containerHeight = $("#container").height();

var boxWidth = $("#box").width();
var boxHeight = $("#box").height();


$("#up").click(function(){ //moving the box up in the div
    $("#box").animate({top: "-=350px"},2000);
  });

  
  $("#down").click(function(){
    $("#box").animate({top: containerHeight-boxHeight},2000);
  });

  
  $("#left").click(function(){ //moving the box to the left by a certain amount of pixels and at a certain speed
    $("#box").animate({left: "-=350px"},2000);
  }); 

  
  $("#right").click(function(){
    $("#box").animate({left:"+=350px"},2000);
  });

  $("#fadeout").click(function(){
    $("#box").fadeOut(500);
  });

  $("#fadein").click(function(){
    $("#box").fadeIn(500);
  });                                      //using fadeOut and fadeIn to affect box's appearance on screen

  


$("#blink").click(function(){setInterval(function(){ //creating a blinking effect
  $("#box").fadeOut().fadeIn()},);
});
  
$("#reset").click(function(){ //resetting the box to return to the top left corner of the div
  $("#box").animate({
      width: "50px",
      height: "50px",    
      opacity: 0.80,
      left: "0px",
      top: "0px"});
    
});

});      
     
        
   
  

