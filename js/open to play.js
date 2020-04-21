var use = document.getElementById("userid").value;
function toplay() {
  var use = document.getElementById("userid").value;
   if (use=="") {
     location.reload();
   }
   else{
   	window.open("game.html");
    localStorage.setItem("user",JSON.stringify(document.getElementById("userid").value));	
   }
}
