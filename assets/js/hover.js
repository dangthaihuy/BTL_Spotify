var list_item_0 = "mainhead-connav-item-0";
var list_item_1 = "mainhead-connav-item-1";
var list_item_2 = "mainhead-connav-item-2";
var list_item_3 = "mainhead-connav-item-3";
var list_item_4 = "mainhead-connav-item-4";
var list_item_5 = "mainhead-connav-item-5";
var main_head = document.getElementById('main-head');

console.log(main_head);

document.getElementById(list_item_0).onmouseover = function() {color1()};
document.getElementById(list_item_1).onmouseover = function() {color2()};
document.getElementById(list_item_2).onmouseover = function() {color3()};
document.getElementById(list_item_3).onmouseover = function() {color4()};
document.getElementById(list_item_4).onmouseover = function() {color5()};
document.getElementById(list_item_5).onmouseover = function() {color6()};

function color1() {
main_head.setAttribute('class','color1');
console.log('1');
}

function color2() {
main_head.setAttribute('class','color2');
console.log('2');
}

function color3() {
main_head.setAttribute('class','color3');
console.log('3');
}

function color4() {
main_head.setAttribute('class','color4');
console.log('4');
}

function color5() {
main_head.setAttribute('class','color5');
console.log('5');
}

function color6() {
main_head.setAttribute('class','color6');
console.log('6');
}