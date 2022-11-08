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

var winningSquares =[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
for (i=0; i<winningSquares.length; i++)
{
    winningSquares[i].addEventListener ("click", function(){
        determineWinner(this);
    })
}
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
    computerTurn();
    
}
function determineWinner ()
{
    var winningSquares =[[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];   
    for (i=0; i<winningSquares.length; i++){

        const winner=winningSquares[i];
        const square1=[winner[0]];
        const square2=[winner[1]];
        const square3=[winner[2]];

        if (square1=="X" && square2=="X" && square3=="X")
          
        {
            var user=document.getElementById("message");
            user.innerHTML="User is the winner!";
        }
        else if (square1=="" || square2=="" || square3==""){
            continue;
        }
        else 
        {
            var match=document.getElementById("status");
            match.innerHTML="Game Over";
            break;
        }
        }    
        
}


//function provided. Add parameter(s) if needed

var match=document.getElementById("status")

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
        
function determineWinner()
{
    var winningSquares =[[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
        for (i=0; i<winningSquares.length; i++){

            const winner=winningSquares[i];
            const square1=[winner[0]];
            const square2=[winner[1]];
            const square3=[winner[2]];
    
            if (square1=="O" && square2=="O" && square3=="O")
               
            {
                var comp=document.getElementById("message");
                comp.innerHTML="Computer is the winner!";
            }
            else if (square1=="" || square2=="" || square3==""){
                continue;
            }
            else 
            {
                var match=document.getElementById("status");
                match.innerHTML="Game Over";
                break;
            }
        }
                      
}
   


function ResetGameBoard()
{
    var playingsquares=document.getElementsByClassName("col");
    playingsquares.innerHTML="";

    match.innerHTML="This is a new game! Click on any of the squares to begin!";
    var message=document.getElementById("message");
    message.innerHTML="";
}