function jest_cyfra(x){

    var dlugosc = x.length;

    for (i=0; i<dlugosc; i++){

        if (x.charCodeAt(i) >= "48" && x.charCodeAt(i) <= "57")
        return true;
        
    }
     return false;



}

function weryfikacja(){

    // var login = document.getElementById("a").value;
    var haslo = document.getElementById("b").value;
    var dlugosc = haslo.length;
    if (haslo ==""){
    document.getElementById("wynik").innerHTML = '<span style="color:red;">HASLO JEST PUSTE</span>';
    }
    else if(dlugosc >= 7 && jest_cyfra(haslo)){
    

        document.getElementById("wynik").innerHTML = '<span style="color:green;">HASLO JEST DOBRE</span>';
    }
    else if (dlugosc >=4 && dlugosc <=6 && jest_cyfra(haslo)){
        document.getElementById("wynik").innerHTML = '<span style="color:blue;">HASLO JEST SREDNIE</span>';
    }
    else {
        document.getElementById("wynik").innerHTML = '<span style="color:yellow;">HASLO JEST SLABE</span>';
    }
    
}