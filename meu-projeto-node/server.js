const http = require("http");//modulo interno no node
const port = 3000;//porta onde o node / servidor ira rodar

const sever =http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});// definir o cabeçalho
    res.write("ola, servidpr em Nodejs esta funcionando. 😃");//corpo
    res.end();//finalizar
})

sever.listen(port, () => { // ele vai rodar na porta definida 
    console.log(`servidor rodando na porta ${port}`);
});

//lendo arquivos

const fs = require("fs"); //importando modulo interno do node chamado file system
// fs.readFile(`dados.txt` , `utf-8`, (err, data) =>{// chamado o metodo para ler meu arquivos
//     if(err)// se der erra vai aparecer ho console 
//         console.log(`Erro: ` , err);

//     console.log(data);// nessa linha ira mostrar os dados do meu arquivos "dados.txt"
// })

// escrevendo no arquivo
fs.writeFile(`dados.txt` , `ola pessoal!!!` , (erro) => {
    if(erro)
        console.log("houver um erro: " + erro)

    console.log(`Arquivo salvo com sucesso`);
});