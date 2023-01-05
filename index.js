class Contemjs {
    constructor() {
        this.buscaContem = document.querySelector('.buscacontem');
        this.contemJS = document.querySelectorAll('.contemjs ul');
        this.grupo = document.querySelector('.grupo');
        this.iniciaBusca();
    }
    iniciaBusca() {
        this.buscaContem.addEventListener('input', () => {
            if (this.buscaContem.value) {
                for (let valor of this.contemJS) {
                let titulo = valor.querySelector('h1');
                titulo = titulo.textContent.toLowerCase();
                let resul = this.buscaContem.value.toLowerCase();
             
                if(titulo.includes(resul)) {
                    valor.style.display = 'block';
                    this.grupo.style.display = 'block';
                    } else {
                    valor.style.display = 'none';
                }
            }
            } else {
                this.grupo.style.display = 'none';
            }
        });
    }
}
const chamaClass = new Contemjs();