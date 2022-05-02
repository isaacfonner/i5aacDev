
function CodeSlope() {

var password = "BeySqaud";
var response;
var entryCount = 0;
var entryLimit = 4;
var error = false;
var correct = false;

while(response != password && !error){
 if(entryCount < entryLimit){
 response = window.prompt("Enter Code!"); 
  entryCount++;
 } else {
  error = true;
   alert("To Many Attemps. Reload to contiune")
 }
  
}
 if(!error){
alert("Correct Password")
  window.location.href("https://mathiasgredal.github.io/Slope-Game/")
   correct = true;
 }
}
