//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools

var globaltotalcommission= findCommission(sum);

function CalculateCommission()
{
          
    var commissions= [
    {Salesperson:"Brad",Salesperson:"Nila", Salesperson:"Joseph", Salesperson:"Kesh", Salesperson:"Lydia", Salesperson:"Devon", Salesperson:"Miler"},
    {December: 1500, December: 15000, December:30000,December:12000,December:45000,December:25000,December:8000},
    {January: 10000,January:25000,January:20000,January:14000,January:30000,January:16000,January:30000},
    {February: 8000,February:7500,February:45000,February:10000,February:38000,February:22000,February:15000},
];

    console.log("Salesperson", + "   " + "Commission", "   " + "Avg Commission");
    console.log("----------------------------------")

    commissions.foreach(function(cc){
        cc.sum=(cc.December+cc.January+cc.February);
        var totalcommission= findCommission(cc.sum);
        console.log(totalcommission);
        average=(totalcommission/3);
        console.log(average);
    })}
        var topCommission=(Math.max(cc.totalcommission));
        if (totalcommission=topCommission){
            cc.Salesperson=topSalesPerson;
        }
        alert(topSalesPerson+ " " + topCommission);

    

     
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

