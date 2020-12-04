let n= 50;

let y= 45;

var rain = window.prompt("How many inches of rain fell")

var str = ("******************************")

var str2= ("********")

let x=rain;

let a= ("The yield should be 51.795 bushels per acre.")

let b= ("The yield should be 40 bushels per acre.")

if (x >= 20){
    n*=0.9;
    console.log(str);
}   
var answer = window.prompt("Did you use fertilizer?")

if (answer == "yes"){
var answer2 =  window.prompt("Did you use premium or regular fertilizer?")
} if (answer2 == "premium"){
    y*=1.151;
    console.log(a);
}
 else {
        n*=0.8;
        console.log(b);
        console.log(str2);
    }
 
