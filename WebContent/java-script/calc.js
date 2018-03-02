// JavaScript source code

window.addEventListener("load", function () {

        var inputX = document.getElementById("input-x");
        var inputY = document.getElementById("input-y");
        var sumInput = document.getElementById("input-sum");
        var sumButton = document.getElementById("btn-sum");
    
        sumButton.onclick = function () {

            var x = parseInt(inputX.value);
            var y = parseInt(inputY.value);
            sumInput.value = x + y;
        };

    
});