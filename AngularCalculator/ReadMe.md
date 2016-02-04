                             ***************************************************************************************
                             READ ME FILE FOR CALCULATOR APPLICATION
                             ***************************************************************************************

                             PLATFORM:
                             ---------
                             Angular JS  FrameWork
                             Text-Editor:Sublime
                             Unit Test Library:Jasmin
                             File that Need to be executed to run the calculator Ouput is:calculator.html
                             For Javscript Logic:you can have access to scripts/calculator.js
                             For styles/calculator.css
                             
                             ..For unit testing 
                             ----------------------
                             File that needs to be executed is jasminespecRunner.html
                             File that contains all the test cases is calc.spec.js  
                             

                             -----------------------

                             Implementation Notes:
                             This Application has been designed to calculate the Addition,Subtraction,Multiplication and Division Operation.
                             Through Angular Js i have created a controller:calcArea where all the arithmatic operations are being performd
                             2>A factory(calcFunctions)  service has been created which is helping to share the operator symbols within the controller.
                             As per the requirement i am able to perform all the necessary Arithmatic operations +,-,*,/.For example you can perform

                             5*3,.6*4,5+3,5-2,5/0=NaN,0/0=0NaN,Setting the decimal place to 4.

                             PLease Note when you use decimal the digits will be stored in buffer so may not be visible until next/following button is clicked,So you can use the functionality....



                             II have used angular Filter:number:4 to set the decimal digits...
                             



                             3>As per the requirement i  am able  display NaN when the number is divided by 0



                             UNIT TESTING
                             ------------
                             1>I am testing the conteoller,module  for their response  .

                             2>I have created test cases for the addition,subtraction ,multiplication ,division operations.
                             3>

