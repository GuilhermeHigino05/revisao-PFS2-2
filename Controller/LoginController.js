import UsuarioRepository from '../Repositories/UsuarioRepository.js'
import AuthMiddleware from '../Middleware/AuthMiddleware.js'
export default class LoginController{
    #usuarioRepository
    constructor(){
        this.#usuarioRepository = new UsuarioRepository()
    }

    async login(req, res){
        try{
            let { login, senha } = req.body();
            if(!login || !senha){
                return res.status(400).json({msg:'Informações invalidas'});
            }
            let userEntity = await this.#usuarioRepository.GetByLoginSenha(login, senha);
            if(!userEntity){
                return res.status(404).json({msg:'Usuario não encontrado'});
            }
            let usuMiddleware = new AuthMiddleware()
            let token = usuMiddleware.gerarToken(userEntity.id, userEntity.nome, userEntity.email);
            res.cookie('token', token, { httpOnly: true });
            return res.status(200).json({token: token })
        }catch(Err){
            console.log(Err);
            return res.status(500).json({msg: 'Internal Server Error'})
        }
    }
}