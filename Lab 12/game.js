$(function(){
//jQuery code goes here

  $("#up").click(function(){
    $("#box").slideUp();
  });

  $("#down").click(function(){
    $("#box").slideDown();
  });

  $("#left").click(function(){
    $("#box").animate({"margin-left":"+=0px"});
  }); 

  $("#right").click(function(){
    $("#box").animate({right});
  });

  $("#fadeout").click(function(){
    $("#box").fadeOut(500);
  });

  $("#fadein").click(function(){
    $("#box").fadeIn(500);
  });

  
$("#blink").click(function(){
    setInterval(function(){
        $("#box").fadeOut().fadeIn();}, 1000);
    
})

$("#reset").click(function(){
    $("#box").animate({
        width: "50px",
        height: "50px",    
        opacity: 0.80,
        position: absolute},function(){
            $(this).css({"backgroundColor":"blue"})
        
   });
  });

});