class Departamento {
    private nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public getName(): string {
        return this.nombre;
    }
}

class Piso {
    private departamentos: Departamento[];

    constructor() {
        this.departamentos = [];
    }

    public pushDepartamento(departamento: Departamento): void {
        this.departamentos.push(departamento);
    }

    public getDepartamentos(): string[] {
        return this.departamentos.map(departamento => departamento.getName());
    }

}

class Edificio {
    private pisos: Piso[];

    constructor() {
        this.pisos = [];
    }

    public addPiso(piso: Piso): void {
        this.pisos.push(piso);
    }

    public addDepartamentoToPiso(pisoIndex: number, departamento: Departamento): void {
        if (this.pisos[pisoIndex]) {
            this.pisos[pisoIndex].pushDepartamento(departamento);
        } else {
            console.log("Piso no encontrado");
        }
}

public getDepartamentosByPiso(pisoIndex: number): string[] {
    if (this.pisos[pisoIndex]) {
        return this.pisos[pisoIndex].getDepartamentos();
    } else {
        console.log("Piso no encontrado");
        return[];
    }

}

}


const departamento = new Departamento("Depa Zai y Agus");
const piso = new Piso();
const departamento1 = new Departamento("Piso 21");
const departamento2 = new Departamento("Piso 22");
const edificio = new Edificio();
const piso1 = new Piso();
const piso2 = new Piso();

piso.pushDepartamento(departamento1);
piso.pushDepartamento(departamento2);
edificio.addPiso(piso1);
edificio.addPiso(piso2);
edificio.addDepartamentoToPiso(0, departamento1);

console.log(departamento.getName());
console.log(piso.getDepartamentos());
console.log("otra persona realizo este cambio");
console.log("otro cambio");
