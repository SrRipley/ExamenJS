function _id(ident){
    return document.getElementById(ident);
}

function factorial(){

    var numero = _id("entradaFactorial").value;
    var operar = "";
    var global = 1;
    

    for ( var i = 1; i <= numero; i++ ){
        global = global * i;
        operar += i + "*"
    }
    _id("operacionsFactorial").innerHTML = operar;
    _id("resultatFactorial").innerHTML = global;
    

}

function calculaIVA(tipusIVA){
    var preuAmbIVA = id_("preuAmbIVA");
    var preuSenseIVA;
        if (tipusIVA == 21) {
                preuSenseIVA = preuAmbIVA / 1.21;
            }else if (tipusIVA == 10){ 
                preuSenseIVA = preuAmbIVA / 1.10;
            }else if (tipusIVA == 4) {
                preuSenseIVA = preuAmbIVA / 1.04;
                }
        preuSenseIVA = resultado.toPrecision(2); //precio sin iva y con dos decimales
    IVA = preuAmbIVA - preuSenseIVA; //iva es el resto
        }


function canviaFons(tipus){
    var colorFondo;
    var colorTexto;
        if (tipus == "clear"){
            colorFondo = "white";
            colorTexto = "black";
    }
        else if (tipus == "random"){
            var gris = Math.floor(Math.random() * 255);
            colorFondo = "rgb(" + gris + "," + gris + "," + gris + ")";
    
    


    _id("cos").style.backgroundColor = colorFondo;
    _id("cos").style.color = colorTexto; }}
