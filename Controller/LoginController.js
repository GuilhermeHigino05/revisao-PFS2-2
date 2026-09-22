import UsuarioRepository from '../Repositories/UsuarioRepository.js'

export default class LoginController{
    #usuarioRepository
    constructor(){
        this.#usuarioRepository = new UsuarioRepository()
    }

    async login(req, res){
        try{
            let { login, senha } = req.body();
            if(!login, !senha){
                return res.status(400).json({msg:'Informações invalidas'});
            }
            
        }catch(Err){
            console.log(Err);
            return res.status(500).json({msg: 'Internal Server Error'})
        }
    }
}