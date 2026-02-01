//your JS code here. If required.

// let boxs = document.querySelectorAll("div")
// for(let box of boxs ){
// 	box.addEventListener("mouseenter" , defaultcolor)
// 	box.addEventListener("mouseleave",changecolor)
// }
// function defaultcolor(e){
	
// 	e.target.style.backgroundColor = "#E6E6FA"
// 	function changecolor(e){
// 		let value = e.target;
		
// 			value.style.backgroundColor = "#6F4E3"
// 	}	
// }
let boxs = document.querySelectorAll(".square");

for (let box of boxs) {
  box.addEventListener("mouseenter", defaultcolor);
  // box.addEventListener("mouseleave", changecolor);
}

function defaultcolor(e) {
	let value = e.target;
	for(let box of boxs){
	if(box===value){
     box.style.backgroundColor =  "#E6E6FA";
}
else{
	  box.style.backgroundColor =  "#6F4E37";
}
}
}
function changecolor(e) {
  // e.target.style.backgroundColor = "#6F4E3A";
}
