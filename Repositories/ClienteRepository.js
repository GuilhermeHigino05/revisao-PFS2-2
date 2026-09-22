import Database from '../db/database.js'
export default class ClienteRepository{
    #banco
    constructor(){
        this.#banco = new Database()
    }

    async Create(ClienteEntity){
        let sql = 'insert into tb_cliente'
    }
}