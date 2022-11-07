/*********************************************************************/
var globalX = 5;

//function invocation needs name and ()
console.log(add());//give function name and () and any parameters it takes
console.log(add);//here i have not used () so entire function will be returned
compare(35,15);
var finalPrice = calc(100,0.05);
console.log("Final prices is " + finalPrice);
reportBMI();
GlobalVsLocalScope1();
GlobalVsLocalScope2();

/*********************************************************************/
/***************** Function definition area *************/
function hello()//no input parameters 
{
    console.log("hello");

    //no return values
}

function add()
{
    return (3+4);//return value
}

function compare(x,y)// input parameters
{   //x and y are already defined so dont assign any values to them   

    if (x>y)
        console.log("x is greater");
    else 
        if (x==y)
        console.log("x and y are equal");
            else
            console.log("y is greater");

}

function calc(salesPrice, discount)//function with input parameters & return value
{
    return (salesPrice - (salesPrice*discount));
}

function reportBMI()
{
      //BMI = weight * 703 / (height  * height)
    var employees = [
                {name: "john", weight: 165, height: 60},
                {name: "mary", weight: 146, height: 70},
                {name: "keith", weight: 200, height: 75}
                ];//JS object array
    
    //"no name" function => anonymous function
    //forEach => function(currentValue,index,parentArray)
    employees.forEach( function(emp){
            emp.bmi = (emp.weight * 703)/(emp.height * emp.height);
            console.log(emp.bmi);
            var health = reportHealthStatus(emp.bmi);//regular function
            console.log(health);
        }
    );
}

function reportHealthStatus(bmi)
{    
    if (bmi > 30)
        return "Obese";
    else if (bmi >= 25)
        return "Overweight";
    else if (bmi >= 18.5)
        return "Healthy";
    else
        return "Underweight";
}
//Global vs Local variable and scope
function GlobalVsLocalScope1()
{
    var x1 = 10;//local variable
    console.log(globalX);
    globalX = 6000;
    console.log(x1);
    //console.log(x2);//cant access x2 as it is local to the 2nd function only
}

function GlobalVsLocalScope2()
{
    var x2 = 20;//local variable
    console.log(globalX);    
    console.log(x2);
}

const books = [
    {title: "One of Us is Lying", author: "Karen McNamus", price: 10.70, country: "US"},
    {title: "The Blood of Flowers", author:"Anita Amirrezvani", price: 17.65, country: "US"},
    {title: "Jane Eyre", author : "Charlotte Bronte", price: 9.00, country: "UK"},
    {title: "The Alchemist", author : "Paulo Coelho", price: 16.65, country: "Brazil"},
    {title: "Persepolis", author : "Marjane Satrapi", price: 16.99, country: "France"},
    {title: "Before the Coffee Gets Cold", author : "Toshikazu Kawaguchi", price: 18.95, country: "UK"},
    {title: "Lost Girls", author : "Andrew Pyper", price: 18.65, country: "Canada"},
    {title: "American Psycho", author : "Bret Easton Ellis", price: 12.65, country: "US"},
    {title: "A House for Mr Biswas", author : "V. S. Naipaul", price: 16.48, country: "UK"},
    {title: "The Miniaturist", author : "Jessie Burton", price: 14.99, country: "UK"},
    {title: "Kokoro", author : "Sōseki Natsume", price: 17.99, country: "Japan"},
    {title: "The Picture of Dorian Gray", author : "Oscar Wilde", price: 13.95, country: "UK"},
    {title: "The Rumi Collection", author : "Jalaluddin Rumi", price: 14.68, country: "US"},
    {title: "Things Fall Apart", author : "Chinua Achebe ", price: 11.89, country: "Nigeria"},
    {title: "The Dinner Guest", author : "Gabriela Ybarra", price: 15.95, country: "Spain"},
    {title: "Runs with Courage", author : "Joan Wolf", price: 9.95, country: "US"},
    {title: "The Hound of the Baskervilles", author : "Arthur Conan Doyle", price: 8.30, country: "UK"},
    {title: "Like Water for Chocolate", author : "Laura Esquival", price: 11.10, country: "Mexico"},
    {title: "Anna Karenina", author : "Leo Tolstoy", price: 14.49, country: "Russia"},
    {title: "The Stranger", author : "Albert Camus", price: 9.95, country: "France"}
];


function getDiscountedPrice() 
{
    books.forEach(function(item) {
    console.log(item.price);
    var salesprice=item.price-(item.price*getDiscount(item.country));
    console.log(item.title, item.author, item.price, salesprice);
    }
    )
}   
       
    function getDiscount(country)
    {
    if (country== "US") 
        return 0.10;
    else if (country=="UK") 
        return 0.05;
    else if (country=="Canada") 
        return 0.12;
    else 
        return 0.15;
      
    }
    
    
    
       