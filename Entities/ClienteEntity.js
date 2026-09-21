import Entity from "./Entity";


export default class ClienteEntity extends Entity{
    #id
    #nome
    #cpf
    #email
    #dataCadastro
    #dataExclusao

    constructor(id, nome, cpf, email, dataCadastro, dataExclusao){
        this.#id = id
        this.#nome = nome
        this.#cpf = cpf
        this.#email = email
        this.#dataCadastro = dataCadastro
        this.#dataExclusao = dataExclusao
    }

    get id () { return this.#id } set id (value) { this.#id = value }
    get nome () { return this.#nome } set nome (value) { this.#nome = value }
    get cpf () { return this.#cpf } set cpf (value) { this.#cpf = value }
    get email () { return this.#email } set email (value) { this.#email = value }
    get dataCadastro () { return this.#dataCadastro } set dataCadastro (value) { this.#dataCadastro = value }
    get dataExclusao () { return this.#dataExclusao } set dataExclusao (value) { this.#dataExclusao = value }

    static toMap(row){
        return new ClienteEntity(row['cli_cod'], row['cli_nome'], row['cli_cpf'], row['cli_email'], row['cli_datacadastro'], row['cli_dataexclusao'])
    }
}