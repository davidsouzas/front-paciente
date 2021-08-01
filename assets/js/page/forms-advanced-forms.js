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
  data.data_nasc = data.data_nasc.split("/").reverse().join("-")
 // data.data_nasc = data.data_nasc[2]+"-"+data.data_nasc[1]+"-"+data.data_nasc[0]
  apiPost("patients", data).then( function(response){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Paciente cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
  });

})

function criaSelect(estado) {
  let opcao = document.createElement("option");
  opcao.value = estado.id
  opcao.text = estado.nome
  return opcao;
}
