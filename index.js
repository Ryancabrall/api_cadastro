const express = require('express'); //servidor web
const fs = require('fs'); //manipulação de arquivos
const path = require('path'); //manipulação de caminhos

const app = express();
const port = 3000;
app.use(express.json());

/*
CLIENTES ENDPOINTS
*/
const clientesFiles = path.join(__dirname, 'clientes.json');

function lerClientes() {
    if (!fs.existsSync(clientesFiles)) {
        return [];
    }

    const dados = fs.readFileSync(clientesFiles, 'utf8');
    try {
        return JSON.parse(dados) || [];
    } catch (e) {
        return [];
    }

}
function salvarClientes(clientes) {
    fs.writeFileSync(clientesFiles, JSON.stringify(clientes, null, 2), 'utf-8');
}

app.post('/clientes', (req, res) => {
    const { cpf, nome, idade, endereco, bairro, contato } = req.body;
    if (!cpf || !nome || !idade || !endereco || !bairro || !contato) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const clientes = lerClientes();
    if (clientes.some(c => c.cpf === cpf)) {
        return res.status(400).json({ error: 'CPF já cadastrado' });
    }

const novoCliente = {
    cpf,
    nome,
    idade,
    endereco,
    bairro,
    contato
};

clientes.push(novoCliente);
salvarClientes(clientes);
res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso', cliente: novoCliente });

});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});