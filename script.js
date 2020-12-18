const n= 50;

let bushelYield = null;

let finalYield = null;

var rain = window.prompt("How many inches of rain fell")

var answer = window.prompt("Did you use fertilizer?")
if (answer=="yes") {
var answer2 =  window.prompt("Did you use premium or regular fertilizer?");
}
var str = ("*");

let x=rain;

let asteriskArr = []
for (let i=0; i<rain; i++){
asteriskArr.push("*");
}
console.log(asteriskArr.join(""))

if (rain>= 20){
    bushelYield = n * 0.9;  
}     
else if (rain < 10){
    bushelYield = n * 0.8;
}
else {
    n==50;
}

if  (answer2== "regular"){
      finalYield = bushelYield * 1.1;
           
}
else if (answer2 == "premium"){
     finalYield = bushelYield * 1.15;    
} 
else 
{
    finalYield= bushelYield;
}
console.log("The final yield should be " +  finalYield  +  " bushels per acre");


