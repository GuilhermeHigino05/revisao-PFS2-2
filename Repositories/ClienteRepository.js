import Database from '../db/database.js'
import ClienteEntity from '../Entities/ClienteEntity.js'
export default class ClienteRepository{
    #banco
    constructor(){
        this.#banco = new Database()
    }

    async Create(ClienteEntity){
        let sql = 'insert into tb_cliente(cli_nome, cli_cpf, cli_email, cli_datacadastro) values(?,?,?,?)'
        let values = [ ClienteEntity.nome, ClienteEntity.cpf, ClienteEntity.email, ClienteEntity.dataCadastro ]
        let result = await this.#banco.ExecutaComandoLastInserted(sql, values)
        return result;
    }

    async GetById(id){
        let sql = 'select * from tb_cliente where cli_cod = ?'
        let values = [id]
        let row = this.#banco.ExecutaComando(sql, values);
        if(row.length > 0){
            return ClienteEntity.toMap(row[0]);
        }
        return null
    }
    async Delete(data){
        let sql = 'update tb_cliente set cli_dataexclusao = ?';
        let values = [data];
        let result = this.#banco.ExecutaComandoNonQuery(sql, values);
        return result
    }
}