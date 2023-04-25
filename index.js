
// Se crea una funcion que captura el valor ingresado por el usuario

// const boton = document.getElementById("encriptar");
const botondos = document.getElementById("encriptar")
botondos.addEventListener("click", () => {

  var input = document.getElementById("texto");
  var valor = input.value;

  // alert("El valor del campo es: " + valor);


  let texto = ""
  for (let i = 0; i < valor.length; i++) {
    // console.log("que trae la i", valor[i])
    if (valor[i] == "a") {
      texto += "ai"
    }
    else if (valor[i] == "e") {
      texto += "enter"
    }
    else if (valor[i] == "i") {
      texto += "imes"
    }
    else if (valor[i] == "o") {
      texto += "ober"
    }
    else if (valor[i] == "u") {
      texto += "ufat"
    } else {
      texto += valor[i]
    }

  }
//   console.log("cambia las vocales", texto)
const msjEncriptado = document.querySelector("#textoMostrado")

msjEncriptado


   
});
