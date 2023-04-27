
/***************** Function definition area *************/
//write a function to change the size of the box (css)
function changeSize()
{
    //Goal: Get input value and set that to the width and height of div called box1
    var x = document.getElementById("inputSize").value;//get input box's value
    
    var box1 = document.getElementById("box1");//get box1 element which is a div
    box1.style.width = x;
    box1.style.height = x;
    
}

function changeColor() //changing the color to the input value
{
    var color=document.getElementById("inputColor").value;

    var box1=document.getElementById("box1");
    box1.style.backgroundColor= color;
}

function changeShape() //changing the shape to the input width and heigh value
{
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;

    var box2 = document.getElementById("box2");
    box2.style.width = w;
    box2.style.height = h;
}

function changeLinkContent()
{
    var linkContent = document.getElementById("linkContent1").value;

    var link = document.getElementById("link1");//the link that is changing
    link.href=linkContent;//updating the link
    link.innerHTML = linkContent; //Updating what the link reads
}

function changeShapes() //changing the square's shape based on user input 
{
    var Radius=document.getElementById("inputRadius").value;
    var squares=document.getElementsByClassName("square");

    for (var j=0; j<squares.length; j++)
        {
           squares[j].style.borderRadius=Radius;   
        }

}

function changeSquares() //changing background colors of chosen elements 
{
    var squares=document.getElementsByClassName("square");
    for(var y=0; y<squares.length; y++)
    {
        squares[y].style.backgroundColor="black";
        squares[y].classList.toggle("toggle1");
    }
}

function changeSquares2() //changing the background colors of chosen elements with the toggle feature 
{
    var squares=document.getElementsByClassName("square");
    for(var y=0; y<squares.length; y++)
    {
        squares[y].style.backgroundColor="white";
        squares[y].classList.toggle("toggle2")
    }
}

function changeSq()
{
    
    var squares = document.getElementsByClassName("square");//returns more than 1 element
    //squares is an array
    for (var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = "yellow";
        squares[i].style.borderRadius = "50px";
        squares[i].style.boxShadow = "2px 2px 2px grey";
        var x = squares[i].innerHTML;
        squares[i].innerHTML = x + " Box";

    }
}

function createSq() //creating a child element 
{

    var parent = document.getElementById("parentSq");

    var child = document.createElement("div");
    child.classList.add("square");

    parent.appendChild(child);

}

function removeSq() //removing a child element from the page
{
    var parent = document.getElementById("parentSq");
    var child = parent.lastElementChild;//returns last child
    parent.removeChild(child);
}

function createLink() //adding a link to the page 
{
    var parent=document.getElementById("parentLink");
    var childx=document.createElement("a");
    textNode = document.createTextNode("Tri-C");
    childx.appendChild(textNode);
    childx.href="http://www.tri-c.edu";
    parent.appendChild(childx);
    
}

function removeLink() //removing a link from the page
{
    var parent=document.getElementById("parentLink");
    var child= parent.lastElementChild;
    parent.removeChild(child);

}


    
