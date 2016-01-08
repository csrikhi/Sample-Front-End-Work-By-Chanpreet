function drawShape() {
	/*This function has been called and is getting  the values from the input fields supplied in the formSubmit() function 
	called on the submit button click */
    var widthlocal = localStorage.getItem("width")
    var heightlocal = localStorage.getItem("height");
    if ((widthlocal == null) || (heightlocal == null)) {
        var context=document.getElementById('Triangle').getContext("2d");
        var canvas = document.getElementById('Triangle'); //
        
        context.clearRect(0, 0, canvas.width, canvas.height);

    } else {
        var padding = 10;
        var context = document.getElementById('Triangle').getContext("2d"); //Context
        context.beginPath();
        context.moveTo(padding + widthlocal / 2, padding);
        context.lineTo(padding + widthlocal, heightlocal + padding);
        context.lineTo(padding, heightlocal + padding);
        context.closePath();

        context.fillStyle = "#ffc821";
        context.fill();
    }
}
/*
clearLocalStorage is clearing the local cache and sending the blank values to the draw shape function

*/
function clearLocalStorage() {

    localStorage.clear();
    drawShape();
}

function formSubmit() {
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    localStorage.setItem("height", height);
    localStorage.setItem("width", width);
    drawShape();
}

window.onload = function() {
        drawShape();
        
   
    }
   

