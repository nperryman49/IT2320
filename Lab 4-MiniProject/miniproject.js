//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools

function CalculateCommission()
{
    var sum=0;
    for(var salesperson=0; salesperson<salesperson.length; salesperson++)
    {
        sum=December[i]+January[i]+February[i];
        var totalcommission= findCommission(sum);

        function findCommission(sum) {

            if (sum > 30000) {
                sum * .08;
            }
            else if (sum > 15000) {
                sum * .05;
            }
            else if (sum > 10000) {
                sum * .03;
            }
            else if (sum > 5000) {
                sum * .02;
            }
            else {
                sum * .01;
            }
            return totalcommission;

        }
    var average=(totalcommission/3);

    console.log("Salesperson", + "   " + "Commission", "   " + "Avg Commission");
    console.log("----------------------------------");
    console.log(salesperson+"   "+ totalcommission+"   "+ average);

    var topCommission=totalcommission 
    if (totalCommission >= topCommission)
         totalcommission==topCommission;      

    }    
          alert(); 
    }
        
    
    

          
    


    //Your code goes here
    /*
    Here's the pseudocode in case you are wondering how to get started:

    1. Save salesperson names in an array
    2. Save December sales amount in an array
    3. Save January sales amount in an array
    4. Save February sales amount in an array
    5. In a "For" loop, for each person

        Calculate Total sales = December sale + January sale + February sale
        
        Calculate commission: 
        if total sales is greater than 30000 then commission = total sales * 0.08 
        If total sales is greater than 15000).....etc
        Continue the if condition for the remaining as specified in the requirement for commission %
        
        Calculate average commission:
        Avg commission = Total commission / 3
        Display sales person name, commission and average commission
        Store the commission to a "topCommission" variable.
        Each time compare topCommission to commission of current salesperson 
        to determine if this is the top commission

    6. Outside the "For" loop, display topCommission and topSalesperson name.
*/

