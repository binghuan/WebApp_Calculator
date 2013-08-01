var result_cal = "";
function appendTextToResult(value) {
	checkIfNeedToRestart();
	result_cal.value = result_cal.value + value;
}


var Operator = {
		none: 0,
		plus: 1,
		minus: 2,
		multiply: 3,
		divide:4,
		equal:5
	}
	
var lastOperator = Operator.none;
var lastValue;  

function calculateResult(currentOperator) {
	
	console.log("lastValue: " + lastValue);
	console.log("lastOperator: " + lastOperator);
	console.log("currentValue: " + result_cal.value);
	
	if(lastValue !== undefined) {
		switch(currentOperator) {
				case Operator.plus:
					console.log( lastValue + " + " + result_cal.value);
					result_cal.value = parseInt(result_cal.value) + parseInt(lastValue); 
					break;
				case Operator.minus:
					result_cal.value = parseInt(lastValue) - parseInt(result_cal.value); 
					break;
				case Operator.multiply:
					result_cal.value = parseInt(result_cal.value) * parseInt(lastValue);
					break;
				case Operator.divide:
					result_cal.value = parseInt(lastValue)/parseInt(result_cal.value); 
					break;
		}
	}
	
	lastOperator = currentOperator;
}

var isOperatorBefore = false;
function checkIfNeedToRestart() {
	
	console.log("checkIfNeedToRestart: " + lastOperator);
	
	if((isOperatorBefore === true)) {
		result_cal.value = "";
		isOperatorBefore = false;
		
	}
	
	if(lastOperator === Operator.equal) {
		result_cal.value = "";
		lastOperator = Operator.none;
	}
}


$(document).ready(function() {
	
	result_cal = document.getElementById('result_field');
	current_operator = document.getElementById('current_operator');
	
	$("#button_one").click(function() {
		appendTextToResult("1");
	});
	
	$("#button_two").click(function() {
		appendTextToResult("2");		
	});
	
	$("#button_three").click(function() {
		appendTextToResult("3");
	});
	
	$("#button_four").click(function() {
		appendTextToResult("4");
	});
	
	$("#button_five").click(function() {
		appendTextToResult("5");
	});
	
	$("#button_six").click(function() {
		appendTextToResult("6");
	});
	
	$("#button_seven").click(function() {
		appendTextToResult("7");
	});
	
	$("#button_eight").click(function() {
		appendTextToResult("8");
	});
	
	$("#button_nine").click(function() {
		appendTextToResult("9");
	});
	
	$("#button_zero").click(function() {
		appendTextToResult("0");
	});
	
	$("#button_clear").click(function() {
		result_cal.value = "";
		lastValue = "";
		lastOperator = Operator.none;
	});
	
	// operator
	$("#button_plus").click(function() {
		console.log("+");
		doOperation(Operator.plus);
	});
	$("#button_minus").click(function() {
		console.log("-");
		doOperation(Operator.minus);
	});
	$("#button_multiply").click(function() {
		console.log("*");
		doOperation(Operator.multiply);
	});
	$("#button_divide").click(function() {
		console.log("/");
		doOperation(Operator.divide);
	});
	
	$("#button_equal").click(function() {

		if((lastOperator != Operator.none)
		&& lastValue !== undefined ) {
			
			var readyValue = result_cal.value;
			
			console.log(lastValue);	
			switch(lastOperator) {
				case Operator.plus:
					console.log("+");
					result_cal.value = parseInt(result_cal.value) + parseInt(lastValue); 
					break;
				case Operator.minus:
				console.log("-");
					result_cal.value = parseInt(lastValue) - parseInt(result_cal.value); 
					break;
				case Operator.multiply:
				console.log("*");
					result_cal.value = parseInt(result_cal.value) * parseInt(lastValue);
					break;
				case Operator.divide:
				console.log("/");
					result_cal.value = parseInt(lastValue)/parseInt(result_cal.value); 
					break;
			}
			
			console.log(readyValue);
			console.log("=");
			console.log(result_cal.value);
			lastValue = result_cal.value;
			lastOperator = Operator.equal;
		}
	});										
});

function doOperation(op) {
	isOperatorBefore = true;
	
	if(lastValue !== "" && lastOperator !== Operator.none && lastOperator !== Operator.equal) {
			calculateResult(op);	
	}
	lastValue = result_cal.value;
	lastOperator = op;
}


// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
		window.location.reload();
    } else {
      console.log("Manifest didn't changed. Nothing new to server.");
    }
  }, false);

}, false);