let n1 = Math.floor(Math.random()*100*1);
let n2 = Math.floor(Math.random()*100*1);

document.getElementById("int").value = n1;
document.getElementById("int1").value = n2;

let sub = n1 + n2;

function Enjoy() {
    var game=document.getElementById("int2").value;
    if(game == sub) {
        document.getElementById("ans").innerHTML = "<p>Correct Answer Awesome</p>"
    } else {
        document.getElementById("ans").innerHTML = "<p>Incorrect Answer Try Again!!</p>"
    } 
    var game = document.getElementById("int2").value = "";
  n1 = Math.floor(Math.random()*100*1);
n2 = Math.floor(Math.random()*100*1);

document.getElementById("int").value = n1;
document.getElementById("int1").value = n2;

sub = n1 + n2;
}
