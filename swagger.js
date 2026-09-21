import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "API para a revisão disciplina de PFS2",
        description: "Documentação do conjunto de endpoints criados para revisão de Programação Fullstack 2"
    },
    host: "localhost:5000"
}

const outputFile = "./swagger-output.json";
const routes = ["./server.js"];

swaggerAutogen({openapi: '3.0.0'})(outputFile, routes, doc)
.then(async () => [
    await import('./server.js')
])