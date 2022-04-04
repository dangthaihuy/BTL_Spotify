var listHover = document.querySelectorAll('.mainhead-connav-item');

var headerColor = document.getElementById('main-head');

for (let key in listHover) {
    switch(key) {
        case 1 :
            listHover[key].addEventListener('onmouseover',color1);
            function color1() {
                document.getElementById('main-head').setAttribute('class','color1');
                console.log("1");
            }
            break;
        
        case 2 :
            listHover[key].addEventListener('onmouseover',color2);
            function color2() {
                headerColor.setAttribute('class','color2');
            }
            break;

        case 3 :
            listHover[key].addEventListener('onmouseover',color3);
            function color3() {
                headerColor.setAttribute('class','color3');
            }
            break;    
            
        case 4 :
            listHover[key].addEventListener('onmouseover',color4);
            function color4() {
                headerColor.setAttribute('class','color4');
            }
            break;

        case 5 :
            listHover[key].addEventListener('onmouseover',color5);
            function color5() {
                headerColor.setAttribute('class','color5');
            }
            break;

        case 6 :
            listHover[key].addEventListener('onmouseover',color6);
            function color6() {
                headerColor.setAttribute('class','color6');
            }
            break;
    }
}