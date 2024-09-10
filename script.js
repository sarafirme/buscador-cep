
async function BuscarCep() {
    let resultCep = document.getElementById("resultado-pesquisa");
    let cepInserido = document.getElementById("cep-inserido").value;
    let result = "";

    if (cepInserido.length < 8) {
        result += `<p class = "erro-mensagem">CEP invalido! Digite 8 números.</p>`;
    } else {
        const url = `https://viacep.com.br/ws/${cepInserido}/json/`
        const response = await fetch(url)
        const data = await response.json()

        if (data.erro) {
            result += `<p class = "erro-mensagem">CEP não encontrado!</p>`;
        } else {
            result += `
                    <div class = "card-resultado">
                        <h2>Endereço</h2>
                        <p>CEP: ${data.cep}</p>
                        <p>Logradouro: ${data.logradouro}</p>
                        <p>Bairro: ${data.bairro}</p>
                        <p>Estado: ${data.estado}</p>
                        <p>Região: ${data.regiao}</p>
                    </div>
                `;
        }
    }
    resultCep.innerHTML = result;
}