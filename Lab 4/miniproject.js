//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
    var topCommission = Math.max.apply(null, arr);
      
    const Salesperson = ["Brad","Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miler"];
    const December =[1500,15000,30000,12000,45000,25000,8000];
    const January = [10000,25000,20000,14000,30000,16000,30000];
    const February = [8000,7500,45000,10000,38000,22000,15000];

    console.log("Salesperson", + " " + "Commission", " " + "Avg Commission");
    console.log("----------------------------------")

       {
        sum=December[0]+January[0]+February[0];
        console.log(Salesperson[0]+ " " + commission+" "+ commission/3);
        commission=commission0;
        if (commission = topcommission) {
            Salesperson[0]= topSalesPerson
        } ;

        sum=December[1]+January[1]+February[1];
        console.log(Salesperson[1]+ " " + commission+" "+ commission/3);
        commission=commission1;
        if (commission = topcommission) {
            Salesperson[1]= topSalesPerson
        } ;

        sum=December[2]+January[2]+February[2];
        commission=commission2;
        console.log(Salesperson[2]+ " " + commission+" "+ commission/3);
        if (commission = topcommission){
            Salesperson[2]= topSalesPerson
        } ;

        sum=December[3]+January[3]+February[3];
        commission=commission3;
        console.log(Salesperson[3]+ " " + commission+" "+ commission/3);
        if (commission = topcommission){
            Salesperson[3]= topSalesPerson
        } ;

        sum=December[4]+January[4]+February[4];
        commission=commission4;
        console.log(Salesperson[4]+ " " + commission+" "+ commission/3);
        if (commission = topcommission){
            Salesperson[4]= topSalesPerson
        } ;

        sum=December[5]+January[5]+February[5];
        console.log(Salesperson[5]+ " " + commission+" "+ commission/3);
        commission=commission5;
        if (commission = topcommission){
            Salesperson[5]= topSalesPerson
        } ;

        sum=December[6]+January[6]+February[6];
        commission=commission6;
        console.log(Salesperson[6]+ " " + commission+" "+ commission/3);     
        if (commission = topcommission){
            Salesperson[6]= topSalesPerson
        } ;

        const totalcommission = [commission0, commission1, commission2, commission3, commission4, commission5, commission6];

        function totalcommission(arr) {
            return Math.max.apply(null, arr);
          }

        if (sum>30000){
            var commission=sum*.08;
        }
        else if (sum>15000){
            var commission=sum*.05;
        }
        else if (sum>10000){
            var commission=sum*.03;
        }
        else if (sum>5000){
            var commission=sum*.02;
        }
        else {
            var commission=sum*.01;
        }

    }
    
        alert(topSalesPerson+ " " + topCommission);


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

}