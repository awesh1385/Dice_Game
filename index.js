
//if we dont give +1 it will give from 0 to 5 so we have to add 1 so it can start from range 1 to 6
var randomNumber1=Math.floor(Math.random()*6)+1;
var query1="/images/dice"+randomNumber1+".png";//we are writing query as we do for sql in java
var player1=document.querySelectorAll("img")[0].setAttribute("src",query1);


var randomNumber2=Math.floor(Math.random()*6)+1;
var query2="/images/dice"+randomNumber2+".png";
var player2=document.querySelectorAll("img")[1].setAttribute("src",query2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 WIN";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player2 WIN";
}
else{
    document.querySelector("h1").innerHTML="❎ DRAW";
}