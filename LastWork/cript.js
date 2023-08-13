//チェックボックスにチェックされた元素のみ表示する関数
function ElementChecker( ElementCheckbox, ElementClass ) {
    var elements = document.getElementsByClassName(ElementClass);
    if( ElementCheckbox.checked ){
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "block"; 
        }
    }
    else{
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none"; 
        }
    }
}