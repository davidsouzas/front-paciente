$(function() {
  let data = getRequest("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
  let estados = JSON.parse(data);
  var dropwdown = document.getElementById("estado");
  estados.forEach(element => {
      let linha = criaSelect(element);
      dropwdown.add(linha, dropwdown.options[0]);
  });

});

function getRequest(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

let data = {}

function handleChange(event) {
  data[event.name] =  event.value
}

$("#cadastrar").click(function(){
  var inputs = document.getElementsByClassName('required');
    var len = inputs.length;
    var valid = true;
    for(var i=0; i < len; i++){
        if (!inputs[i].value){ valid = false; }
    }
  if (!valid){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos obrigatorios',
      })
    return false;
} else { 
  data.data_nasc = data.data_nasc.split("/").reverse().join("-")
  apiPost("patients", data).then( function(response){
    if(response.nome){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Paciente cadastrado com sucesso',
        showConfirmButton: false,
        timer: 2000
      }).then((result) => {window.location.href = window.location.href})
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: response.status == 401 ? 'Não Autorizado' : "Falha ao cadastrar",
      })
    }
  });
}


})

function criaSelect(estado) {
  let opcao = document.createElement("option");
  opcao.value = estado.sigla
  opcao.text = estado.nome
  return opcao;
}
