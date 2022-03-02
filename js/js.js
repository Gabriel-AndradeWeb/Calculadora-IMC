function calculartotal(){
    let nom = document.getElementById("nome").value;
    let pes = parseFloat(document.getElementById("peso").value);
    let alt = parseFloat(document.getElementById("altura").value);
        
 let imc = pes / (alt **2)

 if( imc <= 18.5 ){
    document.getElementById("texto").innerHTML = `Nome : ${nom}  <br> Tem imc : ${imc} <br> Classificação : abaixo do peso `
    document.getElementById("texto").style.color = "red";
 }
  else if( imc <= 24.9){
    document.getElementById("texto").innerHTML = `Nome : ${nom}  <br> tem imc : ${imc} <br> Classificação : peso normal  `;
    document.getElementById("texto").style.color = "red";
 }

 else if( imc <= 29.9){
    document.getElementById("texto").innerHTML = `Nome : ${nom} <br> tem imc ${imc} <br> Classificação : sobrepeso`
    document.getElementById("texto").style.color = "red";
 }

 else if( imc <= 34.9){
    document.getElementById("texto").innerHTML = `Nome : ${nom} <br> tem imc ${imc} <br> Classificação : Obesidade grau 1`
    document.getElementById("texto").style.color = "red";
 }

 else if( imc <= 39.9){
    document.getElementById("texto").innerHTML = `Nome : ${nom} <br> tem imc ${imc} <br> Classificação : Obesidade grau 2`
    document.getElementById("texto").style.color = "red";
 }

 else if(imc <=50){
    document.getElementById("texto").innerHTML = `Nome : ${nom} <br> tem imc ${imc} <br> Classificação : Obesidade Mórbida`
    document.getElementById("texto").style.color = "red";
    }
    else{
        
    }
}//else{
    

 //document.getElementById("texto").innerHTML = `${nom} tem imc ${imc}`
