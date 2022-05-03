
function CodeSlope() {

var password = "BeySqaud";
var response;
var entryCount = 0;
var entryLimit = 4;
var error = false;
var correct = false;


 if(entryCount < entryLimit){
 response = window.prompt("Enter Code!"); 
  if(response = password ) {
   alert("Correct Password")
  window.location.href("https://mathiasgredal.github.io/Slope-Game/")
   correct = true;
  } else {
  
   alert("Incorrect Password")
  
  }
 }
}
