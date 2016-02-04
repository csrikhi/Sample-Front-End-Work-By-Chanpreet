(function() {

	'use strict';

    var app = angular.module("angCalci", []); //Angular Module Definition and declaration 
    //Implementation Of Factory.....
    app.factory('calcFunctions', function() { //Factory sercice sending the data in Controller
    	var operatoresSymbols = {
    		addS: "+",
    		subS: "-",
    		mulS: "*",
    		divS: "/"
    	};
    	return operatoresSymbols;
    });

    //Implementation Of Controller
    app.controller("calculatorArea", ['$scope', 'calcFunctions', function($scope, calcFunctions) {
    	var resultA = [];
        // Bound to the output display
        $scope.output = 0.0000;
        // Flag to check the  newNumber
        $scope.newValueFlag = true;
        // Type Of Arithmatic Operations Being Performed  
        $scope.operationPerformed = "";
        //Arithmatic Symbol
        $scope.operator = "";
        // Holds the  value of the string in the display output
        $scope.bufferValue = 0;
        // subTotal Value Obtained After  Arithmatic Operation
        $scope.subTotal = 0;
        $scope.numLimit = 4;
        $scope.Error = "";
        //Operations
        var addition = "adding",
        subtraction = "subtracting",
        multiplication = "multiplying",
        division = "dividing";
        var addSymbol = calcFunctions.addS,
        subSymbol = calcFunctions.subS,
        mulSymbol = calcFunctions.mulS,
        divSymbol = calcFunctions.divS;
        //Data Input From The User
        //String To Number Conversion Function
        var toNumber = function(numberString) {
        	var result = 0;
        	if (numberString) {
        		result = numberString * 1;
        	}
        	return result;
        };
        //Function to input the  Key Press Values
        $scope.dataInput = function(btn) {
        	if ($scope.output == "0" || $scope.newValueFlag) {
        		$scope.output = btn;
        		$scope.newValueFlag = false;

        	} else {
        		if (String($scope.output).indexOf('.') < 0) {

        		}
        		$scope.output += String(btn);
        	}

            //return true;

            $scope.bufferValue = toNumber($scope.output);
          };
        /* 
         * Sets the operation token to let the user know
         * what the pendingOperation is
         */
         var setOperationSymbol = function(operation) {
         	switch (operation) {
         		case addition:
         		$scope.operator = addSymbol;
         		break;
         		case subtraction:
         		$scope.operator = subSymbol;
         		break;
         		case multiplication:
         		$scope.operator = mulSymbol;
         		break;
         		case division:
         		($scope.operator = divSymbol);
         		break;
         	}
         };
        //Add Operation Function
        $scope.add = function() {
        	if ($scope.bufferValue) {
        		if ($scope.subTotal && $scope.operationPerformed == addition) {
        			$scope.subTotal += $scope.bufferValue;
        		} else {
        			$scope.subTotal = $scope.bufferValue;
        		}
        	}
        	setOperationSymbol(addition);
        	setOutput(String($scope.subTotal));
        	$scope.operationPerformed = addition;
        	$scope.newValueFlag = true;
        	$scope.bufferValue = null;
        };

        //Subtract Operation Function
        $scope.sub = function() {
        	if ($scope.bufferValue) {
        		if ($scope.subTotal && ($scope.operationPerformed == subtraction)) {
        			$scope.subTotal -= $scope.bufferValue;
        		} else {
        			$scope.subTotal = $scope.bufferValue;
        		}
        	}
        	setOperationSymbol(subtraction);
        	setOutput(String($scope.subTotal));
        	$scope.operationPerformed = subtraction;
        	$scope.newValueFlag = true;
        	$scope.bufferValue = null;
        };

        //Multcation  Operation Function
        $scope.mul = function() {
        	if ($scope.bufferValue) {
        		if ($scope.subTotal && $scope.operationPerformed == multiplication) {
        			$scope.subTotal *= $scope.bufferValue;
        		} else {
        			$scope.subTotal = $scope.bufferValue;
        		}
        	}
        	setOperationSymbol(multiplication);
        	setOutput(String($scope.subTotal));
        	$scope.operationPerformed = multiplication;
        	$scope.newValueFlag = true;
        	$scope.bufferValue = null;
        };
        //Division  Operation Function
        $scope.div = function() {
        	if ($scope.bufferValue) {
        		if ($scope.subTotal && $scope.operationPerformed == division) {
        			$scope.subTotal /= $scope.bufferValue;


        		} else {
        			$scope.subTotal = $scope.bufferValue;
        		}
        	}
        	setOperationSymbol(division);
        	setOutput(String($scope.subTotal));
        	$scope.operationPerformed = division;
        	$scope.newValueFlag = true;
        	$scope.bufferValue = null;
        };
        //Result Obtained On Clicking Equal Sign Calculate Function
        $scope.calculate = function() {
        	if (!$scope.newValueFlag) {
        		$scope.bufferValue = toNumber($scope.output);
        	}
        	if ($scope.operationPerformed == addition) {
        		$scope.subTotal += $scope.bufferValue;
        	} else if ($scope.operationPerformed == subtraction) {
        		$scope.subTotal -= $scope.bufferValue;
        	} else if ($scope.operationPerformed == multiplication) {
        		$scope.subTotal *= $scope.bufferValue;
        	} else if ($scope.operationPerformed == division && $scope.bufferValue != 0) {
        		$scope.subTotal /= $scope.bufferValue;
        	}
        	if ($scope.operationPerformed == division && ($scope.subTotal == 0 && $scope.bufferValue == 0)) {
                //$scope.Error="NaN...";
                $scope.subTotal = 0;
                $scope.Error = 0;
                //$scope.output="NaN";
              } else if ($scope.operationPerformed == division && ($scope.subTotal != 0 && $scope.bufferValue == 0)) {
              	$scope.subTotal = 0;
              	$scope.Error = "NaN..";

              }
              setOutput($scope.subTotal);
              setOperationSymbol();
              $scope.operationPerformed = null;
              $scope.bufferValue = 0;
            };
        //Clear The  Calculator Display Console....
        $scope.clear = function() {
        	$scope.subTotal = null;
        	$scope.bufferValue = null;
        	$scope.operationPerformed = "";
        	$scope.Error = null;
        	setOutput("0");
        };

        /* 
         * Updates the display output and resets the
         * newNumber flag.
         */
         var setOutput = function(outputString) {
         	$scope.output = outputString;
         	$scope.newValueFlag = true;
         };
       }]);
})();