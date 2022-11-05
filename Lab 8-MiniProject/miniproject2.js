//Global area
window.onload=function() {
//Try and use classname to get a group of divs instead of getting them one by one by id
//if you are writing the same type of code multiple times, you are doing it incorrect

//Attach events using eventlistener here
var players=document.getElementsByClassName("col");
for (i=0; i< players.length; i++)
{
    players[i].addEventListener("click", function(){
        userTurn(this);
    })
}

var computers=document.getElementsByClassName("col");
for (i=0; i< computers.length; i++)
{
    computers[i].addEventListener ("click", function(){
        computerTurn(this);
    })
}
}

/************** Function area *******************/

//function provided. Add parameter(s) if needed
function userTurn(player)
{
    //Add code here
    player.innerHTML="X";
    computerTurn();
}
    



//function provided. Add parameter(s) if needed
function computerTurn()
{
    //Add code here
    var computers=document.getElementsByClassName("col");
    for (i=0; i<computers.length; i++)
    {
        if ((i.innerHTML!="X") &&
        (i.innerHTML!="O"))
        {
            i.innerHTML="O";
            break;
        }
        

        
        

               
    }
    
}
