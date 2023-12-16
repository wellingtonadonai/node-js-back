import chalk from 'chalk';
import fs from 'fs';



function trataErros (erro) {
    throw new Error (chalk.red(erro.code, 'nao ha arquivo no diretorio'));
};

async function pegaArquivo (caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.blue(texto))
 } catch(erro){
    trataErros(erro)
 }
}

// function pegaArquivo (caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErros)
// }

// function pegaArquivo (caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile (caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro){
//         trataErros(erro);
//         };
//         console.log(chalk.green(texto));
//     });

// }
pegaArquivo('./texto.md')




