function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}


function myFunction() {
    window.print();
}

var max = 35;
var min = 5;
function increaseFontSizeInternal(list) {
    for (i = 0; i < list.length; i++) {
        var s = 12;
        if (list[i].style.fontSize) {
            s = parseInt(list[i].style.fontSize.replace("px", ""));
        }
        if (s != max) {
            s += 1;
        }
        list[i].style.fontSize = s + "px"
    }
}

function increaseFontSize() {

    var paragraph = document.getElementsByTagName('p') && document.getElementsByClassName('myaccessibility');
        increaseFontSizeInternal(paragraph);
        var links = document.getElementsByTagName('a') && document.getElementsByClassName('myaccessibility');
        increaseFontSizeInternal(links);
        var myh3 = document.getElementsByTagName('h3');
        increaseFontSizeInternal(myh3);
        var myh4 = document.getElementsByTagName('h4');
        increaseFontSizeInternal(myh4);
        var myh5 = document.getElementsByTagName('h5');
        increaseFontSizeInternal(myh5);
        var myli = document.getElementsByTagName('li') && document.getElementsByClassName('myaccessibility');
        increaseFontSizeInternal(myli);
        var myul = document.getElementsByTagName('ul') && document.getElementsByClassName('myaccessibility');
        increaseFontSizeInternal(myul);      
        var myrow = document.getElementsByClassName('col-7') && document.getElementsByClassName('myaccessibility');
        increaseFontSizeInternal(myrow);
        var peulot_text = document.getElementsByClassName('peulot_text') && document.getElementsByClassName('myaccessibility');
        increaseFontSizeInternal(peulot_text);
  


      
      

  

   
}

function decreaseFontSizeInternal(list) {
    for (i = 0; i < list.length; i++) {
        var s = 12;
        if (list[i].style.fontSize) {
            s = parseInt(list[i].style.fontSize.replace("px", ""));
        }
        if (s != min) {
            s -= 1;
        }
        list[i].style.fontSize = s + "px"
    }
}

function decreaseFontSize() {
    var paragraph = document.getElementsByTagName('p') && document.getElementsByClassName('myaccessibility');
    decreaseFontSizeInternal(paragraph);
    var links = document.getElementsByTagName('a') && document.getElementsByClassName('myaccessibility');
    decreaseFontSizeInternal(links);
    var myh3 = document.getElementsByTagName('h3');
    decreaseFontSizeInternal(myh3);
    var myh4 = document.getElementsByTagName('h4');
    decreaseFontSizeInternal(myh4);
    var myh5 = document.getElementsByTagName('h5');
    decreaseFontSizeInternal(myh5);
    var myli = document.getElementsByTagName('li') && document.getElementsByClassName('myaccessibility');
    decreaseFontSizeInternal(myli);
    var myul = document.getElementsByTagName('ul') && document.getElementsByClassName('myaccessibility');
    decreaseFontSizeInternal(myul);    
    var myrow = document.getElementsByClassName('col-7') && document.getElementsByClassName('myaccessibility');
    decreaseFontSizeInternal(myrow);




}
var counter = 0;
var colors = ["black", "white"];
function mycolor() {
    var change = document.getElementById('color');
    if (counter % 2 == 0) {
            change.style.color = colors[0];

        counter++; 

    }
    else {
        change.style.color = colors[1];
        counter++; 
    }
    

}
  



