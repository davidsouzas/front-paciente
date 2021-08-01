if(!localStorage.getItem("token")){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Sessão expirada",
      }).then((result) => {window.location.href = "/auth-login.html"})
}


$("#username")[0].innerHTML = localStorage.getItem("nome")