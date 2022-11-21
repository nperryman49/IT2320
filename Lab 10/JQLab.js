
$(document).ready(function(){
   

    //all of jquery your code goes here

    $("#btn1").click(function(){
        $("#wrapper").hide();
    })

    $("#btn2").click(function(){
        ("#wrapper").show();
    })

    var numbers= 'jquery';
    $("btn3").click(function(){
        $(".wrapperDiv");
        switch (numbers) {
            case '1':
                text('one');
                break;
            case '2':
                text('two');
                break;
            case '3':
                text('three');
                break;
            case '4':
                text('four');
                break;}
                
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
    
    });
