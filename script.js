
function clearScreen(){
    document.getElementById('inputbox').value="";
}

function display(value) {
    document.getElementById('inputbox').value+=value;
}

function calculate(){
    var p = document.getElementById('inputbox').value;
    var q = eval(p);
    document.getElementById('inputbox').value=q;
}
