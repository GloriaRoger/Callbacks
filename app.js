function holler() {
	console.log('HEY YOU');
}
//example of a function stored in a variable
const whisper = function() {
	console.log('I HAVE A SECRET');
};
// end of example


function add(x,y) {
	return x + y;
}

function subtract(x,y) {
	return x - y;
}
function multiply(x,y) {
	return x * y;
}

function divide(x,y) {
	return x / y;
}
function power(x,y) {
	return x ** y;
}

//exampleof a function stored in an array - simple math functions abpve 
const mathFuncs = [add, subtract, multiply, divide, power];

setTimeout(whisper, 4000);
//passing a fucntion as an argument 
function doMath(a,b,mathFunc) {
	return mathFunc(a,b)
}

doMath(3,4,function(a,b) {
	console.log(a **b);
});

function doAllMath(a,b, mathfuncs) {
	for (let func of mathFuncs) {
		console.log( func(a, b));
	}
}