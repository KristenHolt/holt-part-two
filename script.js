let n= 50;

let y= 45;

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

let b = ("The yield should be 40 bushels per acre.");

if (rain>= 20){
     n*=0.9;  
}     
let c = ("The yield should be 49.5 bushels per acre")             
let a = ("The yield should be 51.795 bushels per acre.")
if  (answer2== "regular"){
      y*=1.1;
      {console.log(c)}      
}
if (answer2 == "premium"){
      y*=1.151;
      {console.log(a)}
 
} 
else if (rain<10) 
{ 
     n*=0.8;
     console.log(b);
} 


