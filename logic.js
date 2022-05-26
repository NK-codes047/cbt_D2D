// countdown timer
let swatch = new Date();
let h = "00";
let m = "29";
let s = "59";

var time = setInterval(myTimer,1000);

function myTimer(){
    document.getElementById('watch'). innerHTML = h +":"+ m +":"+ s;
    s--;
    if (s == -1) {
        m--;
        s=59;
    }
    if (m == 0) {
        alert("Time's up!")
    }
}

//-----------------------------------------------------------------------------------------------

//action algo

function save(){
    document.getElementById('active').setAttribute("id","save");
}

function active(){
    document.getElementById('not_view').setAttribute("id","active");
}