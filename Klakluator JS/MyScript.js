function dodawanie() {

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    
    
    if ( a == "" || b == ""){
        
        document.getElementById("wynik").innerHTML = "Prosze wypelnic oba Pola!!!"; 
        
    }
    else{

        a = parseFloat(a);
        b = parseFloat(b);
        var wynik = a + b;
    
        document.getElementById("wynik").innerHTML = "Twoj wynik to: " + wynik;
    }
}
function odejmowanie() {

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    
    
    if ( a == "" || b == ""){
        
        document.getElementById("wynik").innerHTML = "Prosze wypelnic oba Pola!!!"; 
        
    }
    else{
        
        a = parseFloat(a);
        b = parseFloat(b);
        var wynik = a - b;
    
        document.getElementById("wynik").innerHTML = "Twoj wynik to: " + wynik;
    }
}
function mnozenie() {

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    
    
    if ( a == "" || b == ""){
        
        document.getElementById("wynik").innerHTML = "Prosze wypelnic oba Pola!!!"; 
        
    }
    else{
        
        a = parseFloat(a);
        b = parseFloat(b);
        var wynik = a * b;
    
        document.getElementById("wynik").innerHTML = "Twoj wynik to: " + wynik;
    }
}
function dzielenie() {

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    
    
    if ( a == "" || b == ""){
        
        document.getElementById("wynik").innerHTML = "Prosze wypelnic oba Pola!!!"; 
        
    }
    else if (b == 0){

        document.getElementById("wynik").innerHTML = "Nie dzieli sie przez 0!!!";
    }
    else{
        
        a = parseFloat(a);
        b = parseFloat(b);
        var wynik = a / b;
    
        document.getElementById("wynik").innerHTML = "Twoj wynik to: " + wynik;
    }
}