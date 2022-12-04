$(function(){
//jQuery code goes here

  $("#up").click(function(){
    $("#box").animate({top:"-=50px"},2000);
  });

  $("#down").click(function(){
    $("#box").animate({top:"+=50px"},2000);
  });

  $("#left").click(function(){
    $("#box").animate({left:"-=50px"},2000);
  }); 

  $("#right").click(function(){
    $("#box").animate({left:"+=50px"},2000);
  });

  $("#fadeout").click(function(){
    $("#box").fadeOut(500);
  });

  $("#fadein").click(function(){
    $("#box").fadeIn(500);
  });

  
$("#blink").click(function blink(){
    setInterval(function(){
        $("#box").fadeOut().fadeIn();}, 1000);
    
});

$("#reset").click(function(){
    $("#box").animate({
        width: "50px",
        height: "50px",    
        opacity: 0.80,
        left: "0px",
        top: "0px"});

    $("#box").clearInterval();
  });
       
       
        
   
  });

