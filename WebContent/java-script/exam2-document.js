// JavaScript source code
window.addEventListener("load", function () {
    var nodeSelButton = document.getElementById("btn-node-sel");
    var section1 = document.getElementById("sec1");

    nodeSelButton.onclick = function () {
        // 노드 탐색 _방법1 :
        //var li = section1.lastElementChild.firstElementChild;
        //li.textContent = "호료료료료";

        // 노드 탐색 _방법2 :
        var lis = section1.getElementsByTagName("li");
        lis[0].textContent = "호잇!";


    };

});