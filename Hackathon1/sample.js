
function displayMenu(){
    console.log("0. Exit the program".blue);
    console.log("1. Enter a string to display in 8-bit pattern (Binary)".blue);
    console.log("2. Enter a string to display 16-bit pattern (Binary)".blue);
    console.log("3. Enter a string to display in 8-bit pattern (Octal)".blue);
    console.log("4. Enter a string to display 16-bit pattern (Octal) ".blue);
    console.log("5. Enter a string to display in 8-bit pattern (Hexadecimal)".blue);
    console.log("6. Enter a string to display 16-bit pattern (Hexadecimal) ".blue);
}

/*
function conTo8Bin(num){
    if(cnt8 == 0) { return}
    let rem = num%2; cnt8--;
    conTo8Bin(Math.floor(num/2))
    resStr = resStr + rem
}

function conTo16Bin(num){
    if(cnt16 == 0) { return}
    let rem = num%2; cnt16--;
    conTo16Bin(Math.floor(num/2))
    resStr = resStr + rem
}
*/
function convert(num){
    switch(num){
        case 10:
            return "A";
        case 11:
            return "B";
        case 12:
            return "C";
        case 13:
            return "D";
        case 14:
            return "E";
        case 15:
            return "F";
    }
}

function conTo8Bin(num){
    let sum="";
    for(let i=0;i<8;i++){
        let rem = num%2;
        sum = sum+rem
        num = Math.floor(num/2);
    }
    for(let j=sum.length-1;j>=0;j--){
        resStr = resStr + sum[j];
    }
}

function conTo16Bin(num){
    let sum="";
    for(let i=0;i<16;i++){
        let rem = num%2;
        sum = sum+rem
        num = Math.floor(num/2);
    }
    for(let j=sum.length-1;j>=0;j--){
        resStr = resStr + sum[j];
    }
}

function conTo8Oct(num){
    let sum="";
    for(let i=0;i<8;i++){
        let rem = num%8;
        sum = sum+rem
        num = Math.floor(num/8);
    }
    for(let j=sum.length-1;j>=0;j--){
        resStr = resStr + sum[j];
    }
}

function conTo16Oct(num){
    let sum="";
    for(let i=0;i<16;i++){
        let rem = num%8;
        sum = sum+rem
        num = Math.floor(num/8);
    }
    for(let j=sum.length-1;j>=0;j--){
        resStr = resStr + sum[j];
    }
}

function conTo8Hexa(num){
    let sum="";
    for(let i=0;i<8;i++){
        let rem = num%16;
        //console.log(rem + "first")
        if(rem>9) {
            rem = convert(rem);
        }
       // console.log(rem+ "Hey")
        sum = sum+rem
        num = Math.floor(num/16);
    }
    for(let j=sum.length-1;j>=0;j--){
        resStr = resStr + sum[j];
    }
}

function conTo16Hexa(num){
    let sum="";
    for(let i=0;i<16;i++){
        let rem = num%16;
        if(rem>9) {
            rem = convert(rem);
        }
        sum = sum+rem
        num = Math.floor(num/16);
    }
    for(let j=sum.length-1;j>=0;j--){
        resStr = resStr + sum[j];
    }
}




let cnt8 =8, cnt16 = 16;
let rl = require("readline-sync");
let clr = require("colors");
let lookUpTable = {};
for(let i=33;i<=126;i++){
    let character = String.fromCharCode(i);
    lookUpTable[character] = i;
}
//console.log(lookUpTable);
console.log("Welcome to the converter".yellow);
let resStr ="";
while(true){
    displayMenu();
    let option = rl.question("Enter option: ".green);
    if(option === "0"){
        break;
    }
    else if(option === "1" || option==="2" || option === "3" || option === "4" || option ==="5" || option ==="6"){
        let resArr = [];
        let string = rl.question("Enter String: ".green);
        for(let i=0;i<string.length;i++){
            let num = lookUpTable[string[i]];
            let bin; resStr ="";
            
            if(option === "1")  {
                cnt8 =8;
                conTo8Bin(num);
            }else if(option === "2"){
                cnt16 = 16;
                conTo16Bin(num);
            }else if(option === "3"){
                cnt8 = 8;
                conTo8Oct(num); 
            }else if(option === "4"){
                cnt16 = 16;
                conTo16Oct(num);
            }else if(option === "5"){
                cnt8 =8;
                conTo8Hexa(num);
            }else if(option === "6"){
                cnt16 = 16;
                conTo16Hexa(num);
            }
            
            resArr.push(resStr);
        }
        console.log("\x1b[31m%s\x1b[0m","the ouput is:")
        console.log(resArr);
        let isContinue = rl.question("Do you want to continue? (y/n): ".magenta);
        if(isContinue === "Y" || isContinue==="y") {
            // const shell = require('shelljs')
            // shell.exec('./command.sh')
            console.clear();
         }
        else break;
    }
}