const secret = 'RubyOnRails'
import jwt from 'jsonwebtoken'
import UsuarioRepository from '../Repositories/UsuarioRepository.js';
export default class AuthMiddleware {
    gerarToken(id, email, nome) {
        return jwt.sign({
            id: id,
            nome: nome,
            email: email
        }, secret, {
            expiresIn: '5h'
        });
    }

    async validar(req, res, next) {
        let token = req.cookies.token
        if (token) {
            try {
                let user = jwt.verify(token, secret)
                let repo = new UsuarioRepository()
                if (await repo.GetById(user.id) == false) {
                    return res.status(401).json({ msg: 'Usuario não encontrado' })
                }
                req.user = id
                next()
            }
            catch(Err){
                res.status(401).json({msg:'Não Autorizado'});
            }
        }
        else{
            res.status(401).json({msg: "Não autorizado!"});
        }
    }
}