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

/*var computers=document.getElementsByClassName("col");
for (i=0; i< computers.length; i++)
{
    computers[i].addEventListener ("click", function(){
        computerTurn(this);
    })
}*/

var winningSquares =[[0,1,2],
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
ResetGameBoard();

})
}

/************** Function area *******************/

//function provided. Add parameter(s) if needed
function userTurn(player)
{
    //Add code here
    player.innerHTML="X";
    var winner=determineWinner("X");
    if (winner == false){
        computerTurn();
        winner=determineWinner("O");
    }
}

function determineWinner (elem)
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

        var status=document.getElementById("status"); 
        var message=document.getElementById("message");

        if ((boxes[square1].innerHTML==boxes[square2].innerHTML) && (boxes[square2].innerHTML==boxes[square3].innerHTML==elem))
        {
            
            if (boxes[square1.innerHTML="X"])
                {message.innerHTML= "User is the winner!";
                 status.innerHTML="Game Over";}
            if (boxes[square1.innerHTML="O"])
                {message.innerHTML= "Computer is the winner!";
                 status.innerHTML="Game Over";}

                return true;
            
        }
              
        return false;
        status.innerHTML="Game Over. It's a match!";
                                
}
}

//function provided. Add parameter(s) if needed

function computerTurn()
{
    //Add code here
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
        
function ResetGameBoard()
{
    var playingsquares=document.getElementsByClassName("col");
    for (i=0; i<playingsquares.length; i++)
    {
        playingsquares[i].innerHTML="";
    }
    var status=document.getElementById("status");
    status.innerHTML="";
    var message=document.getElementById("message");
    message.innerHTML="This is a new game! Click on any of the squares to begin!";
}