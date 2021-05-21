describe("Calculator", function(){

    describe("Add", function() {

        it("should add a vlue to the current result", function(){

            var value1 = 1;
            var value2 = 3;

            var calculator = addValue(value1, value2);

            expect(calculator).toEqual(4);
        })

    });

    describe("Subtract", function() {

        it("should subtract a vlue from the current result", function(){

            var value1 = 3;
            var value2 = 6;

            var calculator = subtractValue(value1, value2);

            expect(calculator).toEqual(-3);
        })

    });

    describe("Multiply", function() {

        it("should multiply a vlue with the current result", function(){

            var value1 = 1;
            var value2 = 3;

            var calculator = multiplyValue(value1, value2);

            expect(calculator).toEqual(3);
        })

    });

    describe("Divide", function() {

        it("should divide a vlue with the current result", function(){

            var value1 = 2;
            var value2 = 2;

            var calculator = divideValue(value1, value2);

            expect(calculator).toEqual(1);
        })

    });

    // describe("Reset Calc", function() {

    //     it("should reset the calc", function(){

    //         let inputResult = {
    //             value: "25"
    //         };

    //         let calc = {
    //             savedValue: 50,
    //             functionStopCalc: addValue
    //         };

    //         clearData();

    //         expect(inputResult.value).toEqual("");
    //         expect(calc.savedValue).toEqual(null);
    //         expect(calc.functionStopCalc).toEqual(null);
    //     })

    // });

});