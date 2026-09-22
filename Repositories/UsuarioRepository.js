import Database from "../db/database.js";
import UsuarioEntity from '../Entities/UsuarioEntity.js'


export default class UsuarioRepository{
    #banco
    constructor(){
        this.#banco = new Database
    }

    async GetByLoginSenha(email, senha){
        let sql = 'select * from tb_usuario where usu_login = ? and usu_senha = ?'
        let value = [email, senha]
        let rows = await this.#banco.ExecutaComando(sql, value);
        if(rows.length > 0){
            return UsuarioEntity.toMap(rows[0]);
        }
        return null;
    }
        async GetById(id){
        let sql = 'select * from tb_usuario where usu_id = ?'
        let value = [id]
        let rows = await this.#banco.ExecutaComando(sql, value);
        if(rows.length > 0){
            return UsuarioEntity.toMap(rows[0]);
        }
        return null;
    }
}