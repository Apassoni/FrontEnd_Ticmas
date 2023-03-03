// ----------------- INICIO CAMBIO MODO NOCTURNO ---------------------------------

document.body.style.backgroundColor = "#D18A44"; 
function cambiarTema(){
    if (document.body.style.backgroundColor == "rgb(209, 138, 68)"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        
    } else {
        document.body.style.backgroundColor = "#D18A44";
        document.body.style.color = "black";
    
    }
}
// ----------------------------- FIN CAMBIO MODO NOCTURNO ----------------------------------