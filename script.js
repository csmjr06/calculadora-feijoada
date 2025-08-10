document.getElementById("feijoadaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let numPessoas = parseInt(document.getElementById("pessoas").value);
    let receita = gerarReceita(numPessoas);
    
    document.getElementById("resultado").textContent = receita;
    document.getElementById("resultadoContainer").style.display = "block";
    document.getElementById("modoPreparo").classList.remove("show"); // fecha sempre no início
    document.getElementById("btnPreparo").textContent = "📜 Ver Modo de Preparo";
});

document.getElementById("btnPreparo").addEventListener("click", function() {
    let box = document.getElementById("modoPreparo");
    if (box.classList.contains("show")) {
        box.classList.remove("show");
        this.textContent = "📜 Ver Modo de Preparo";
    } else {
        box.classList.add("show");
        this.textContent = "❌ Fechar Modo de Preparo";
    }
});

function gerarReceita(numPessoas) {
    let rabo = 0.025 * numPessoas;
    let pe = 0.025 * numPessoas;
    let joelho = 0.04 * numPessoas;
    let paio = 0.0125 * numPessoas;
    let lombo = 0.025 * numPessoas;
    let linguica = 0.0125 * numPessoas;
    let costelinha = 0.075 * numPessoas;
    let calabresa = 0.0125 * numPessoas;
    let orelha = 0.025 * numPessoas;
    let bochecha = 0.025 * numPessoas;
    let bacon = 0.04 * numPessoas;
    let feijao = 0.15 * numPessoas;

    let L = numPessoas;
    let LB = Math.ceil(numPessoas / 3) + 1;
    let CE = Math.ceil(numPessoas / 2);
    let DA = numPessoas;
    let CF = Math.ceil(numPessoas / 3);
    let FL = Math.ceil(numPessoas / 3);
    let MS = Math.ceil(numPessoas / 12);
    let MC = Math.ceil(numPessoas / 12);
    let PD = Math.ceil(numPessoas / 6) + 1;
    let AB = Math.ceil(numPessoas / 2);

    return `Ingredientes para ${numPessoas} pessoas:\n` +
           `- ${rabo.toFixed(2)} kg de rabo\n` +
           `- ${pe.toFixed(2)} kg de pé\n` +
           `- ${joelho.toFixed(2)} kg de joelho\n` +
           `- ${paio.toFixed(2)} kg de paio\n` +
           `- ${lombo.toFixed(2)} kg de lombo\n` +
           `- ${linguica.toFixed(2)} kg de linguiça fina\n` +
           `- ${costelinha.toFixed(2)} kg de costelinha\n` +
           `- ${calabresa.toFixed(2)} kg de calabresa\n` +
           `- ${orelha.toFixed(2)} kg de orelha\n` +
           `- ${bochecha.toFixed(2)} kg de bochecha\n` +
           `- ${bacon.toFixed(2)} kg de bacon\n` +
           `- ${feijao.toFixed(2)} kg de feijão preto\n\n` +
           `Adicionais:\n` +
           `- ${L} limões\n` +
           `- ${LB} laranjas Bahia\n` +
           `- ${CE} cebolas\n` +
           `- ${DA} cabeças de alho\n` +
           `- ${CF} molhos de couve fresca\n` +
           `- Q.B. açúcar\n` +
           `- Q.B. sal\n` +
           `- Q.B. pimenta do reino\n` +
           `- ${AB} xícaras de arroz branco\n` +
           `- Q.B. azeite\n` +
           `- Q.B. cachaça\n` +
           `- Q.B. pimenta\n` +
           `- Q.B. aperitivos\n` +
           `- ${FL} folhas de louro\n` +
           `- Q.B. farinha de mandioca (branca ou torrada - para farofa)\n` +
           `- ${MS} maços de salsinha\n` +
           `- ${MC} maços de cebolinha\n` +
           `- ${PD} pimentas dedo de moça`;
}

