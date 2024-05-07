import inquirer from "inquirer"

let myBalance = 0;
let isContinue = true;
const pinCode = 1234;

const message = "Welcome to ATM";
console.log(message);

let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter code:"
})

if(pin_ans.ans === 1234){

    do{
        let ans= await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select my option",
            choices: ["Deposite","withdraw","fast cash","balance check"]
        })
    
        //-----------------deposite--------------------
        if(ans.list === "Deposite"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposite_amount",
                message: "Please Enter your amount:"
            })
    
            if(ans.Deposite_amount > 0){
                myBalance = myBalance + ans.Deposite_amount
                console.log(myBalance);
            }
        }
        //----------------withdraw----------------
        else if(ans.list === "withdraw"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "withdraw_amount",
                message: "Please enter amount"
            })
            if(ans.withdraw_amount <= myBalance){
                myBalance = myBalance - ans.withdraw_amount
                console.log(myBalance);
            }else{
                console.log("Not enough Money");
            }
        }
        //------------------Fast Cash----------------------
        else if(ans.list === "fast cash"){
            let ans = await inquirer.prompt({
                type: "list",
                name: "fast_cash",
                message: "Please select one",
                choices: ["600","3000","5000"]
            })
            if(ans.fast_cash <= myBalance){
                if(ans.fast_cash === "600"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
    
                }else if(ans.fast_cash === "3000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
    
                }else if(ans.fast_cash === "5000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
                }
            }
        }
        //--------------------------Check Balance---------------------
        else if(ans.list === "balance check"){
            console.log(`your balance is: ${myBalance}`);
        }
        //----------------------while condition---------------
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue:"
        })
    
        if(while_ans.condition === false){
            isContinue = false
        }
    
            
            
    
        
    
    }while (isContinue);
}
else{
    console.log("Invalid pin code");
}

