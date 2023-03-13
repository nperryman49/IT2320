//Global area
window.onload=function() {

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


function userTurn(player)
{
    //where a user clicks, an "X" will be placed
    player.innerHTML="X";
   
}
    computerTurn(); //computerTurn will automatically execute 




function computerTurn()
{
    //if a box is not occupied by an X or O, an O will be put on the board during computerTurn
    var computers=document.getElementsByClassName("col");
    for (i=0; i<computers.length; i++)
    {
        if ((computers[i].innerHTML!="X") &&
        (computers[i].innerHTML!="O"))
        {
            computers[i].innerHTML="O";
            break;
        }
        

        
        

               
    }
    
}
