
$(document).ready(function(){
   

    //all of jquery your code goes here

    $("#btn1").click(function(){
        $("#wrapper").hide();
    })

    $("#btn2").click(function(){
        $("#wrapper").show();
    })

    
    $("#btn3").click(function(){
        
        $("#1").text("one");
        $("#2").text("two");
        $("#3").text("three");
        $("#4").text("four");
        
        $(".wrapperDiv:odd").css("background-color","white")
        $(".wrapperDiv:odd").css("color", "black");     
        $(".wrapperDiv:even").css("background-color", "black");
        $(".wrapperDiv:even").css("color", "white");
    })
        
    

    

    $(".wrapperDiv").mouseover(function(){
        $(this).removeAttr("background-color");
        $(this).removeAttr("font-color");
        $(this).css("background-color", "yellow");

    })

    $(".wrapperDiv").mouseout(function(){
        $(this).removeAttr("style");
        
                
    })
    
    });
