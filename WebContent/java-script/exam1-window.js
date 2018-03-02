// 카운트 다운 예제
window.addEventListener("load", function () {
    var countButton = document.getElementById("countdown-button");
    var countSpan = document.getElementById("count-span");


    countButton.onclick = function () {
        //alert(countSpan.textContent);
        //span.textContent = countSpan;
        //var x = parseInt(countSpan.value);

        //setTimeout(function () {
        //    var y = parseInt(countSpan.textContent);
        //    countSpan.textContent = --y;
        //}, 1000);

        setInterval(function () {
            var y = parseInt(countSpan.textContent);
            countSpan.textContent = --y;
        }, 1000)

    };


});

//예제2 . 새창 띄우기

window.addEventListener("load", function () {
    var newTabButton = document.getElementById("btn-new-tab");
    var newWinButton = document.getElementById("btn-new-win");
    var navWinButton = document.getElementById("btn-nav-newWin");
    var closeWinButton = document.getElementById("btn-close-win");

   // var navTabButton = document.getElementById("btn-nav-newTab");

    var introSpan = document.getElementById("span-intro");

    var win = null;

    if (opener == null)
        introSpan.textContent = "최초의 윈도우";
    else
        introSpan.textContent = "오프너가 있는 자식 윈도우";


    newTabButton.onclick = function () {
        //open("calc.html");
        win = open("exam1-window.html");
    };

    newWinButton.onclick = function () {
        win = open("exam1-window.html", "_blacnk", "width=500px, height=600px");
    };

    /*navTabButton.onclick = function () {
        win = open("calc.html");

        if (win != null) {
            wi  n.location.href = "http://naver.com";
        }
    };*/

    navWinButton.onclick = function () {
         win = open("exam1-window.html", "_blacnk", "width=500px, height=600px");

          if (win != null) {
              win.location.href = "http://naver.com";
          }

        /*var countSpan = document.getElementById("count-span");
        countSpan.textContent = "할룽~~~~~";*/
    };

    closeWinButton.onclick = function () {
        if (win != null)
            win.close();
    };

});

//예제3 . 내부 윈도우 다루기

window.addEventListener("load", function () {
    var introSpan2 = document.getElementById("span-intro2");
    var parentAccesButton = document.getElementById("btn-parent-acces");
    var childtAccesButton = document.getElementById("btn-child-acces");

    if (parent == window)
        introSpan2.textContent = "최상의 윈도우";
     else
        introSpan2.textContent = "부모가 있는 자식 윈도우";

        parentAccesButton.onclick = function () {

            if (parent != window) {
                //win.location.href = "http://www.newlecture.com";
                var countSpan = parent.document.getElementById("count-span");
                countSpan.textContent = "Hi~";
            }
        };

        childtAccesButton.onclick = function () {

            if (parent == window) {
                //win.location.href = "http://www.newlecture.com";

                //var frame = document.getElementById("f1");
                var countSpan = frames[0].document.getElementById("count-span");
                countSpan.textContent = "Hi~";
            }
        };
});