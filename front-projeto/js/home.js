function validaLogin() {
    let userTxt = localStorage.getItem("userLogged");

    //verificar se o usuário está logado
    if((!userTxt)){
        window.location = "index.html";
    }

    let jsonUser = JSON.parse(userTxt); //transforma o text em um Json
    document.getElementById("user").innerHTML = `${jsonUser.nome} ( ${jsonUser.cpf} )`;
    document.getElementById("imgUser").innerHTML = `<img src="${jsonUser.linkFoto}">`;
}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html";
}

function home(){
    window.location="http://localhost:5500/home.html"; 
}

function relatorio(){
    window.location="http://localhost:5500/relatorio.html"; 
}

function solicitacoes(){
    window.location="http://localhost:5500/solicitacoes.html"; 
}
