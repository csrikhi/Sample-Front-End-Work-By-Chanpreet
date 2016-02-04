describe("A suite", function() {
	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
	});
})

describe('angCalci', function() {
	var scope, controller;
	beforeEach(function() {
		module('angCalci');

	});
	it('It is the Main Angular  Application Module ', function() {

	});
});
describe('calculatorArea', function() {
	beforeEach(module('angCalci'));

	var $controller;

	beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        //$scope=$scope;
    }));
	it('It is the Main Angular  Controller  So all Operations Performed Here ', function() {

	});


	describe('$scope.dataInput', function(btn) {
		it('it takes the input from the button key press', function(btn) {
			var $scope = {};
			var controller = $controller('calculatorArea', {
				$scope: $scope
			});

            var btn = 8; //Button Key Value
            $scope.dataInput(btn);
            expect($scope.output).toEqual(btn);
        });

	});



	describe('$scope.calculate', function() {
		beforeEach(function() {});

		it("This function should return the addition Result", function() {
			var $scope = {};
			var controller = $controller('calculatorArea', {
				$scope: $scope
			});
			$scope.subTotal = 24;
			$scope.bufferValue = 6;
			$scope.subTotal = $scope.subTotal + $scope.bufferValue;
			$scope.calculate();
			expect($scope.subTotal).toEqual(30);

		});

		it("This function should return the subtracted Value", function() {
			var $scope = {};
			var controller = $controller('calculatorArea', {
				$scope: $scope
			});
			$scope.subTotal = 10;
			$scope.bufferValue = 6;
			$scope.subTotal = $scope.subTotal - $scope.bufferValue;
			$scope.calculate();
			expect($scope.subTotal).toEqual(4);

		});

		it("This function should return the multiplied Value", function() {
			var $scope = {};
			var controller = $controller('calculatorArea', {
				$scope: $scope
			});
			$scope.subTotal = 11;
			$scope.bufferValue = 6;
			$scope.subTotal = $scope.subTotal * $scope.bufferValue;
			$scope.calculate();
			expect($scope.subTotal).toEqual(66);

		});

		it("This function should result in Value after Division", function() {
			var $scope = {};
			var controller = $controller('calculatorArea', {
				$scope: $scope
			});
			$scope.subTotal = 10;
			$scope.bufferValue = 2;
			$scope.subTotal = $scope.subTotal / $scope.bufferValue;
			$scope.calculate();
			expect($scope.subTotal).toEqual(5);

		});

		it("This function should result in NaN after Division by Zero", function() {
			var $scope = {};
			var controller = $controller('calculatorArea', {
				$scope: $scope
			});
			$scope.subTotal = 60;
			$scope.bufferValue = 0;
			$scope.subTotal = $scope.subTotal / $scope.bufferValue;
			$scope.calculate();
			expect($scope.subTotal).toEqual(Infinity);

		});



	});


});