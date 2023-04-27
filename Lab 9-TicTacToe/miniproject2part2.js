
window.onload=function() {

var players=document.getElementsByClassName("col");
for (i=0; i< players.length; i++)
{
    players[i].addEventListener("click", function(){
        userTurn(this);
    })
}

/*var computers=document.getElementsByClassName("col");
for (i=0; i< computers.length; i++)
{
    computers[i].addEventListener ("click", function(){
        computerTurn(this);
    })
}*/

var winningSquares =[[0,1,2], //these combinations of squares will be used to determine a possible winner
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
for (i=0; i<winningSquares.length; i++)
{   }

var resetbutton=document.getElementById("reset");
resetbutton.addEventListener ("click", function(){
ResetGameBoard(); //this will use the methid ResetGameBoard to clear the board of Xs and Os

})
}

/************** Function area *******************/


function userTurn(player)
{
    
    player.innerHTML="X";
    var winner=determineWinner("X");
    if (winner == false){
        computerTurn();
        winner=determineWinner("O");
    }

}

function determineWinner (elem) //this function added onto the previous lab will determine if there is a winner
{
    var winningSquares =[[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];  
   
    var boxes=document.getElementsByClassName("col");
    for (i=0; i<winningSquares.length; i++){

        const winner=winningSquares[i];
        const square1=[winner[0]];
        const square2=[winner[1]];
        const square3=[winner[2]];
        
        if (boxes[square1].innerHTML=="X" && boxes[square2].innerHTML== "X" && boxes[square3].innerHTML=="X") //if all three boxes of any of the winningSquares match, the user is the winner
        {
            var message=document.getElementById("message");
            message.innerHTML="User is the winner!";
                                         
            return true;
            
        }
        else if (boxes[square1].innerHTML=="O" && boxes[square2].innerHTML== "O" && boxes[square3].innerHTML=="O") //if all three boxes of any of the winningSquares match, the computer is the winner
        {
            var message=document.getElementById("message");
            message.innerHTML="Computer is the winner!";
                                         
            return true;
            
        }
        else if (boxes[square1].innerHTML==elem && boxes[square2].innerHTML== elem && boxes[square3].innerHTML==elem){
            var status=document.getElementById("status");
            status.innerHTML="Game Over"                   
        }
        }
                 
          return false;                            
}  



function computerTurn()
{
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
        
function ResetGameBoard() //all elements by a class name are chosen to reset to empty for a new game
{
    var playingsquares=document.getElementsByClassName("col");
    for (i=0; i<playingsquares.length; i++)
    {
        playingsquares[i].innerHTML=""; //squares are reset to empty
    }
    var status=document.getElementById("status");
    status.innerHTML="This is a new game! Click on any of the squares to start the game!";
    var message=document.getElementById("message");
    message.innerHTML="";
}
