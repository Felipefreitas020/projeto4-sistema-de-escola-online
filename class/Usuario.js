

class Usuario {
    #nome
    #idade

    constructor (nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    get nome() {
        return this.#nome
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    get idade() {
        return this.#idade
    }

    set idade(novaidade){
      this.#idade = novaidade
    }
    
    acessoPainel(){
        return "Acesso ao sistema escolar"
    }

}
module.exports = Usuario;