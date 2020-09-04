function enviarSol(event) { 
    event.preventDefault(); //interrompe a execução padrão de envio do formulário
    let txtnome = document.getElementById("txtNome");
    let txtoperadora = document.getElementById("txtOperadora");
    let txtcelular = document.getElementById("txtCelular");
    let txtdocumento = document.getElementById("txtDocumento");
    
    let statusSelect = document.getElementById("sel_status");
    let statusValue = statusSelect[statusSelect.selectedIndex].value; //obtem o valor status selecionado
    
    if (txtnome.value ==""){
        document.getElementById("msgErro").innerHTML = "Preencha o nome do técnico";
        formSol.txtNome.focus;
        return false;
    }
        
    if (txtoperadora.value ==""){
        document.getElementById("msgErro").innerHTML = "Preencha o nome da operadora";
        formSol.txtOperadora.focus;
        return false;
    }
            
    if (txtcelular.value ==""){
        document.getElementById("msgErro").innerHTML = "Preencha o Celular / Whatsapp";
        formSol.txtCelular.focus;
        return false;
    }    

    if (txtdocumento.value ==""){
        document.getElementById("msgErro").innerHTML = "Preencha o Documento";
        formSol.txtDocumento.focus;
        return false;
    }

    let novasolicitacao = {
        "nomeTecnico": txtnome.value,
        "operadora": txtoperadora.value,
        "telefone": txttelefone.value,
        "doc": txtdocumento.value,
        "status": "I",
        "pdvidsolic": null
    }

    let cabecalho = {
        method: 'PUT',
        body: JSON.stringify(novasolicitacao),
        headers:{
            'Content-type':'application/json'
        }
    }

}

function buscarPDV() { 
    fetch("http://localhost:8080/pdvs")
        .then(res => res.json())
        .then(result => preencheResposta(result));
} 

function preencheResposta(result) {
    let cmbPDV = '<select class="form-control" id="sel_PDV">\<option>Selecione uma opção</option>';
    for(let index=0; index < result.length; index ++){
        //alert(`${result[index].id}`);
        cmbPDV += '<option value="' + `${result[index].id}` + '">' + `${result[index].nome}` + '</option>';
    }

    document.getElementById("cmbResposta").innerHTML = cmbPDV;
}


