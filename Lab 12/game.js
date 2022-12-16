$(function(){
//jQuery code goes here

var containerWidth = $("#container").width();
var containerHeight = $("#container").height();

var boxWidth = $("#box").width();
var boxHeight = $("#box").height();


$("#up").click(function(){
    $("#box").animate({top: "-=350px"},2000);
  });

  
  $("#down").click(function(){
    $("#box").animate({top: containerHeight-boxHeight},2000);
  });

  
  $("#left").click(function(){
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
  });

  


$("#blink").click(function(){setInterval(function(){
  $("#box").fadeOut().fadeIn()},);
});
  
$("#reset").click(function(){
  $("#box").animate({
      width: "50px",
      height: "50px",    
      opacity: 0.80,
      left: "0px",
      top: "0px"});
    
});

});      
     
        
   
  

