var list_item_0 = "mainhead-connav-item-0";
var list_item_1 = "mainhead-connav-item-1";
var list_item_2 = "mainhead-connav-item-2";
var list_item_3 = "mainhead-connav-item-3";
var list_item_4 = "mainhead-connav-item-4";
var list_item_5 = "mainhead-connav-item-5";
var main_head = document.getElementById('main-head');
var main_head_fixed2 = document.getElementById('mainhead-fixed2');
var mainhead_fixed = document.getElementById('mainhead-fixed');


document.getElementById(list_item_0).onmouseover = function () { color1() };
document.getElementById(list_item_1).onmouseover = function () { color2() };
document.getElementById(list_item_2).onmouseover = function () { color3() };
document.getElementById(list_item_3).onmouseover = function () { color4() };
document.getElementById(list_item_4).onmouseover = function () { color5() };
document.getElementById(list_item_5).onmouseover = function () { color6() };

function color1() {
    main_head.setAttribute('class', 'color1');
    mainhead_fixed.setAttribute('class', 'fixedColor1');
}

function color2() {
    main_head.setAttribute('class', 'color2');
    mainhead_fixed.setAttribute('class', 'fixedColor2');
}

function color3() {
    main_head.setAttribute('class', 'color3');
    mainhead_fixed.setAttribute('class', 'fixedColor3');
}

function color4() {
    main_head.setAttribute('class', 'color4');
    mainhead_fixed.setAttribute('class', 'fixedColor4');
}

function color5() {
    main_head.setAttribute('class', 'color5');
    mainhead_fixed.setAttribute('class', 'fixedColor5');
}

function color6() {
    main_head.setAttribute('class', 'color6');
    mainhead_fixed.setAttribute('class', 'fixedColor6');
}

document.getElementById(list_item_0).onclick = function () { changeColor1() };
document.getElementById(list_item_1).onclick = function () { changeColor2() };
document.getElementById(list_item_2).onclick = function () { changeColor3() };
document.getElementById(list_item_3).onclick = function () { changeColor4() };
document.getElementById(list_item_4).onclick = function () { changeColor5() };
document.getElementById(list_item_5).onclick = function () { changeColor6() };

function changeColor1() {
    main_head_fixed2.setAttribute('class', 'color1');
}

function changeColor2() {
    main_head_fixed2.setAttribute('class', 'color2');
}

function changeColor3() {
    main_head_fixed2.setAttribute('class', 'color3');
}

function changeColor4() {
    main_head_fixed2.setAttribute('class', 'color4');
}

function changeColor5() {
    main_head_fixed2.setAttribute('class', 'color5');
}

function changeColor6() {
    main_head_fixed2.setAttribute('class', 'color6');
}