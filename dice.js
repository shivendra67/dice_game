var ran=Math.floor(Math.random()*6)+1;
var str="images/dice"+ran+".png";
document.querySelector(".image1").setAttribute("src",str);
var ran1=Math.floor(Math.random()*6)+1;
var str1="images/dice"+ran1+".png";
document.querySelector(".image2").setAttribute("src",str1);
if(ran>ran1)
{
  document.querySelector("h1").innerHTML="Player 1 wins🚩!"
}
else if(ran<ran1)
{
  document.querySelector("h1").innerHTML="Player 2 wins🚩!"
}
else if(ran===ran1)
{
  document.querySelector("h1").innerHTML="Draw!"
}
