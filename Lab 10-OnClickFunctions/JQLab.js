
$(document).ready(function(){
   

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
        //manipulating the appearance of the elements on screen to change background colors and text
    

    $(".wrapperDiv").mouseover(function(){
        $(this).removeAttr("background-color");
        $(this).removeAttr("font-color");
        $(this).css("background-color", "yellow");

    }) //using mouseover to change the appearance of the element by removing colors and applying another background color

    $(".wrapperDiv").mouseout(function(){
        $(this).removeAttr("style");
        
                
    }) //upon mouseout, the element's style will remove style changes seen on mouseover
    
    });
