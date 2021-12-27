function abrirHTML() {
    if (document.getElementById("curso_css").style.display = "block"  || document.getElementById("curso_js").style.display == "block" ){
    document.getElementById("curso_js").style.display = "none";
    document.getElementById("curso_css").style.display = "none";
    document.getElementById("curso_html").style.display = "block"
    }
}
function abrirCSS() {
    if (document.getElementById("curso_html").style.display = "block"  || document.getElementById("curso_js").style.display == "block" ){ 
        document.getElementById("curso_html").style.display = "none";
        document.getElementById("curso_js").style.display = "none";
        document.getElementById("curso_css").style.display = "block";
    } 
}

function abrirJS() {
    if (document.getElementById("curso_html").style.display = "block" || document.getElementById("curso_css").style.display == "block" ){ 
        
        document.getElementById("curso_html").style.display = "none";
        document.getElementById("curso_css").style.display = "none";
        document.getElementById("curso_js").style.display = "block";
    }      
}
