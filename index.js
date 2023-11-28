import fs from 'fs';
import chalk from 'chalk';



function trataErros (erro) {
    throw new Error (chalk.red(erro.code, 'nao ha arquivo no diretorio'));
};

function pegaArquivo (caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile (caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro){
        trataErros(erro);
        };
        console.log(chalk.green(texto));
    });

}
pegaArquivo('./texto.md')



