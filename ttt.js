var reset = document.querySelector("#b");

//Grab all squares
var squares = document.querySelectorAll("td");

//Clear all the squares
function clear() {
  for(var i=0;i<squares.length; i++){
    squares[i].textContent = "";
  }
}

reset.addEventListener('click',clear);

//Check the square marker
function clicked() {
  var val = this.textContent;
  if(val === "O"){
    this.textContent = "";
  }else if (val === "") {
    this.textContent = "X";
  }else if (val === "X") {
    this.textContent = "O";
  }
}

//For loop to add event Listeners to all squares
for(var i=0; i<squares.length; i++){
  squares[i].addEventListener('click',clicked);
}
