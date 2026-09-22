import Entity from './Entity.js'

export default class UsuarioEntity extends Entity{
    #id
    #nome
    #login
    #senha

    constructor(id, nome, login, senha){
        this.#id = id
        this.#nome = nome
        this.#login = login
        this.#senha = senha
    }

    get id () { return this.#id } set id (value) { this.#id = value }
    get nome () { return this.#nome } set nome (value) { this.#nome = value }
    get login () { return this.#login } set login (value) { this.#login = value }
    get senha () { return this.#senha } set senha (value) { this.#senha = value }


    static toMap(row){
        return new UsuarioEntity(row['usu_cod'], row['usu_nome'], row['usu_login'], row['usu_senha'])
    }
}