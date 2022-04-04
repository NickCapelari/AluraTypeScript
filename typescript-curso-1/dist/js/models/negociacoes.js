export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}
