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

function criaSelect(estado) {
  let opcao = document.createElement("option");
  opcao.value = estado.id
  opcao.text = estado.nome
  return opcao;
}
