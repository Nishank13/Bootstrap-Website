var arr = ['Media/1.jpg','Media/2.jpg','Media/3.jpg','Media/9.jpg'];
var counter = 0;


function move(a) {
	
	counter = counter + a ; 
	
	if(counter == -1) {
		counter = 3;
	}

	if (counter == 4) {
		counter = 0;
	}

	var x = arr[counter]; 
	changeimg(x);
}

function changeimg(v){
	console.log(counter);
	if(counter == -1) {
		counter = 3;
	}

	if (counter == 4) {
		counter = 0;
	}
	var x = arr[counter]; 
	document.getElementById('main-display').src = x;
	
}
