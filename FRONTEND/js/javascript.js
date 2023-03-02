document.body.style.backgroundColor = "orange"; 
document.getElementById("barra_navegacion").style.backgroundColor = "orange";
function cambiarTema(){
    if (document.body.style.backgroundColor == "orange"){
        document.body.style.backgroundColor = "lightskyblue";
        document.getElementById("barra_navegacion").style.backgroundColor = "lightskyblue";
        
    } else {
        document.body.style.backgroundColor = "orange";
        document.getElementById("barra_navegacion").style.backgroundColor = "orange";
        
    }
}

