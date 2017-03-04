var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista RX";

var pacientes = document.querySelectorAll(".paciente");


for (i =0; i < pacientes.length ; i++){
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var validarAltura = validaAltura(altura);
  var validarPeso = validaPeso(peso);

  if (!validarPeso){
    console.log("Peso invalido.")
    tdImc.textContent = "Peso Invalido!"
    validarPeso = false;
    paciente.classList.add("paciente-invalido");
  }

  if (!validarAltura){
    console.log("Peso invalido.")
    tdImc.textContent = "Altura invalida!"
    validarAltura = false;
    paciente.classList.add("paciente-invalido");
  }


  if (validarPeso && validarAltura){
  var imc = calculaImc(peso,altura);
  tdImc.textContent = imc.toFixed(2);
  }

}

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc;
}


function validaPeso(peso){
  if (peso >= 0 && peso <= 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if (altura >=0 && altura <= 3.00){
    return true;
  }else{
    return false;
  }
}
