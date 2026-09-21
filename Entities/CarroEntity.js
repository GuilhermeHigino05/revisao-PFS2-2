import Entity from "./Entity.js";


export default class CarroEntity extends Entity{
    #id
    #placa
    #modelo
    #marca
    #ano
    #valorDiaria
    #dataExclusao

    constructor(id, placa, modelo, marca, ano, valor, data){
        this.#id = id
        this.#placa = placa
        this.#modelo = modelo
        this.#marca = marca
        this.#ano = ano
        this.#valorDiaria = valor
        this.#dataExclusao = data
    }

    get id () { return this.#id } set id (value) { this.#id = value}
    get placa () { return this.#placa } set placa (value) { this.#placa = value}
    get modelo () { return this.#modelo } set modelo (value) { this.#modelo = value}
    get marca () { return this.#marca } set marca (value) { this.#marca = value}
    get ano () { return this.#ano } set ano (value) { this.#ano = value}
    get valorDiaria () { return this.#valorDiaria } set valorDiaria (value) { this.#valorDiaria = value}
    get dataExclusao () { return this.#dataExclusao } set dataExclusao (value) { this.#dataExclusao = value}

    static toMap(row){
        return new CarroEntity(row['vei_cod'], row['vei_placa'], row['vei_modelo'], row['vei_marca'], row['vei_ano'], row['vei_valordiaria'], row['vei_dataexclusão'])
    }
    
}