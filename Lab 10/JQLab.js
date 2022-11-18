
$(function(){
   

    //all of jquery your code goes here

    $("#btn1").click(function(){
        $("#wrapper").hide();
    })

    $("#btn2").click(function(){
        ("#wrapper").show();
    })

    for (var i=1; i<4; i++){
    $("btn3").click(function(){
        $(".wrapperDiv").text();
    })

    $("btn3").click(function(){
        $(".wrapperDiv:odd").css("background-color", "black");
        $(".wrapperDiv:even").css("background-color", "white");
        $(".wrapperDiv:odd").css("font-color", "white");
        $(".wrapperDiv:even").css("font-color", "black");
        
    })

    $(".wrapperDiv").mouseover(function(){
        $(this).removeAttr("background-color","font-color", text);
        $(this).css("background-color", "yellow");

    })

    $(".wrapperDiv").mouseout(function(){
        $(this).removeAttr("background-color","font-color", text);
                
    })
    }
    });
