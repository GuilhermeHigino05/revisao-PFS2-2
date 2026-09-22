import UsuarioRepository from '../Repositories/UsuarioRepository.js'

export default class LoginController{
    #usuarioRepository
    constructor(){
        this.#usuarioRepository = new UsuarioRepository()
    }

    async login(req, res){
        
    }
}