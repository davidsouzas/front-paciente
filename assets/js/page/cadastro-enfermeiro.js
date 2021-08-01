let data = {}

function handleChange(event) {
  data[event.name] =  event.value
  //console.log(event.value)
  //console.log(event.name)
  //console.log(data)
}

function verificarCpf(event) {
    data[event.name] =  event.value
    apiGet("enfermeiro/"+event.value).then(function(e){
        if(e.id){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Já existe um enfermeiro cadastrado com esse cpf!',
              })
              event.value = ""
        }
    })
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
        apiPost("enfermeiro", data).then( function(response){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Enfermeiro cadastrado com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
          });
    }
  })
