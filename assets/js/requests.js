var baseUrl = "http://localhost:8080/"
function apiGet(endpoint){
    var myHeaders = new Headers();

    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };
    
    return fetch(baseUrl+endpoint, myInit)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      //  console.log(response);
        return response;
    
    });    

}

//apiGet("patients");

function apiPost(endpoint, body){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    var myInit = { method: 'POST',
                   headers: myHeaders,
                   mode: 'cors',
                   body: JSON.stringify(body),
                   cache: 'default' };
    
    return fetch(baseUrl+endpoint, myInit)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        console.log(response);
        return response;
    
    });    
}

/*apiPost("patients",
    {
        "nome": "David",
        "cpf": "068.627.655-82",
        "data_nasc": "2021-01-01T03:00:00.000+00:00",
        "peso": 63.0,
        "altura": 1.86,
        "uf": "BA"
    });*/