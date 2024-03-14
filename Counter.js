console.log("Check");
let count = 0;

const value = document.querySelector("#Value");
const btns = document.querySelectorAll(".Gen");
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var Hour = 0;
var Minete = 0;
var Second = 0;




value.innerText = "Hour: " + count.toString()

increase.addEventListener("click",function(e){
  count+=1;
  value.innerText = "Hour: " + count.toString();
  Second += 1;
  value20.innerText = "0"+Hour.toString()+ ":" + "0"+ Minuete.toString() + ":"+"0" + Second.toString();

  //value20.innerText = Hour + ":" + Minute 
  
  //Hour + ":" + Minuete + ":" + Second
  
  
  //"Hour: " + count.toString();
})



decrease.addEventListener("click",function(e){
  count-=1;
  value.innerText = "Hour: " + count.toString();
})
reset.addEventListener("click",function(e){
  count = 0;
  value.innerText = "Hour: " + count.toString();
})

time= 300
function Timer(cou){
  setTimeout(time, 1)
}
