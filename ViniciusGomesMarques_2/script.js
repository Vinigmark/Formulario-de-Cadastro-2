seletor = document.querySelector("#color")
alterarCor()

function alterarCor(){
   document.body.style.backgroundColor = seletor.value
}

let vnome, vemail, vsenha

function gravarCad(){
   vnome = document.getElementById('nome_cad').value
   vemail = document.getElementById('email_cad').value
   vsenha = document.getElementById('senha_cad').value
   
   localStorage.nome = vnome
   localStorage.email = vemail
   localStorage.senha = vsenha
}

let vLogin, vPassword

function gravarLog(){
   vLogin = document.getElementById('Email_login').value
   vPassword = document.getElementById('Senha_login').value

   localStorage.Email = vLogin
   localStorage.Senha = vPassword
}