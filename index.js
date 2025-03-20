//EXPLICAÇÃO DETALHADA SOBRE O PROJETO (index.html, index.js) EM "DOCUMENTAÇÃO.TXT" NESSA PASTA! 
//EXPLICAÇÃO DETALHADA SOBRE O PROJETO (index.html, index.js) EM "DOCUMENTAÇÃO.TXT" NESSA PASTA! 

function inserirElementos(num) 
{
    var valorAtual = document.getElementById('result').value; 
    document.getElementById('result').value = valorAtual+num; 
}

function LimparVisor()
{
    document.getElementById('result').value = " ";  
}

document.getElementById('button-C').addEventListener('click', LimparVisor); 

function Calculo() {
    var resultado = document.getElementById('result').value; 
    if(resultado === ""){
        alert("Informe valores para o cálculo");
    return;
    }
    document.getElementById('result').value = eval(resultado);
}