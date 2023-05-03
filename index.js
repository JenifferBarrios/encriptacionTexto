
// Se crea una funcion que captura el valor ingresado por el usuario

// const boton = document.getElementById("encriptar");
const botondos = document.getElementById("encriptar")
botondos.addEventListener("click", () => {

  let input = document.getElementById("texto");
  let valor = input.value.toLowerCase()
  if(valor !== ""){
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
  
      
  document.querySelector(".muñeco").style.display= "block"
  //   console.log("cambia las vocales", texto)
  let msjEncriptado = document.querySelector("#textoMostrado")
  
  msjEncriptado.innerHTML = texto
  let msjEncontrado = document.querySelector('h2')
  msjEncontrado.innerHTML = "Mensaje Encontrado"
  
  //Desencriptar 
  const btndesencriptar = document.getElementById('desencriptar')
  
  btndesencriptar.addEventListener("click", () => {
    msjEncriptado.innerHTML = valor
    document.querySelector(".muñeco").style.display="none"
  })
}else {
  alert("Escribe tu mensaje")
}
});

