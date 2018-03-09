//예제1
window.addEventListener("load", function () {
    //var nodeSelButton = document.getElementById("btn-node-sel");
    var nodeSelButton = document.querySelector("input");
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

//예제2

window.addEventListener("load", function () {
    var imgChangeButton = document.querySelector("#ex2 .btn-img-change");
    var imgChangeTxt = document.querySelector("#ex2 .txt-img-change");
    var img = document.querySelector("#ex2 img");
   

    imgChangeButton.onclick = function () {
        img.src = imgChangeTxt.value;
        //img.src = "http://img1.daumcdn.net/thumb/R1024x0/?fname=http://i1.daumcdn.net/cfile282/image/2539083E58667FF7234C41";
        //img.style.width = ["600px"];
        img.style.width = "700px";

    }
 
});

//예제3

window.addEventListener("load", function () {
    var section = document.querySelector("#ex3");
    var styleChangeButton = document.querySelector("#ex3 .btn-style-change");
    var lis = document.querySelectorAll(".list-gallery li");
   
    styleChangeButton.onclick = function () {
        lis[0].classList.remove("item-photo1");
        lis[1].classList.remove("item-photo1");
        lis[2].classList.remove("item-photo1");
    };

    //노드 추가 예제 변수들
    var addTextNodeButton = section.querySelector(".add-text-node-button");
    var addElementNodeButton = section.querySelector(".add-element-node-button");
    var textInput = section.querySelector("h1+div>input:nth-child(2)");
    var textBox = section.querySelector(".list-gallery>div");

    addTextNodeButton.onclick = function () {
        var textNode = document.createTextNode(textInput.value);
        textBox.appendChild(textNode);
        
    };
    addElementNodeButton.onclick = function () {
        var img = document.createElement("img");
        img.style.width = "100px";
        img.src = "http://cfile27.uf.tistory.com/image/124834465012F4042416D9";
        textBox.appendChild(img);
    };
});