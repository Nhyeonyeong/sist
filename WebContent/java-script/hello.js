// JavaScript source code

function init() {
    var btnPrint = document.getElementById("btn-print");
    btnPrint.onclick = function () {
        //�׷��� �̺�Ʈ �Լ��� ���� �� �̸��� �� ������ ���� : �͸��Լ�
        var x, y;
        x = prompt("x���� �Է��ϼ���", 0);
        y = prompt("y���� �Է��ϼ���", 0);
        //alert(parseInt(x) + parseInt(y));
        x = parseInt(x);
        y = parseInt(y);
        btnPrint.value = x + y;
        
    }
}
window.onload = init;