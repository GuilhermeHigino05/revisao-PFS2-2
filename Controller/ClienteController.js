import ClienteRepository from "../Repositories/ClienteRepository.js"
import ClienteEntity from '../Entities/ClienteEntity.js'

export default class ClienteController{
    #cliRepo
    constructor(){
        this.#cliRepo = new ClienteRepository()
    }

    async Create(req, res){
        try{
            let {nome, cpf, email} = req.body
            if(!nome || !cpf || ! email){
                return res.status(400).json({msg: 'Dados invalidos'})
            }
            let data = new Date()
            let cliEntity = new ClienteEntity(0, nome, cpf, email, data, null);
            let result = await this.#cliRepo.Create(cliEntity);
            if(!result){
                return res.status(500).json({msg: 'Erro ao criar Usuario'})
            }
            return res.status(201).json({msg: 'Usuario Criado com sucesso'});
        }
        catch(Err){
            console.log(Err);
            return res.status(500).json({msg: 'Internal Server Error'})
        }
    }

    async Delete(req, res){
        try{
            let { id } = req.body()
            if(!id){
                return res.status(400).json({msg: 'Dados invalidos'})
            }
            let cliEntity = this.#cliRepo.GetById(id)
            if(!cliEntity){
                return res.status(404).json({msg: 'Cliente não encontrado'})
            }
            let data = new Date()
            let result = this.#cliRepo.Delete(data);
            if(result){
                return res.status(200).json({msg: 'Usuario excluido com sucesso '})
            }else{
                throw new Error ('Internal server error')
            }
        }
        catch(Err){
            console.log(Err);
            return res.status(500).json({msg: 'Internal Server Error'})
        }
    }
}