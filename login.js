var placeholder;

function myFunction(x) {
	this.placeholder = x.placeholder;
	x.placeholder = ''; 
}

function revert(x){
	console.log(x)
	x.placeholder = this.placeholder; 
}