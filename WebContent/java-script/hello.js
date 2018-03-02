// JavaScript source code

function init() {
    var btnPrint = document.getElementById("btn-print");
    btnPrint.onclick = function () {
        //그렇다 이벤트 함수는 내가 그 이름을 알 이유가 없다 : 익명함수
        var x, y;
        x = prompt("x값을 입력하세요", 0);
        y = prompt("y값을 입력하세요", 0);
        //alert(parseInt(x) + parseInt(y));
        x = parseInt(x);
        y = parseInt(y);
        btnPrint.value = x + y;
        
    }
}
window.onload = init;