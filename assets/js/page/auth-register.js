let data = {}

function handleChange(event) {
  data[event.name] =  event.value
  console.log(data)
}

localStorage.clear()


$("#logar").click(function(e){
    apiPost("login", data).then(function(e){
        if(e.token){
            localStorage.setItem("token", e.token)
            localStorage.setItem("nome", e.medico?.nome || e.enfermeiro?.nome)
            window.location.href="/cadastro-paciente.html"
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario ou senha invalido',
              })
        }
    })
});


