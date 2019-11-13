import { ListaItem } from './lista-item.model';
export class Lista{
    id:number;
    titulo:string;
    creadaEn: Date;
    terminadoEn: Date;
    terminada:boolean;
    items: ListaItem[];

    constructor(titulo:string){
        this.titulo = titulo;
        this.id = new Date().getTime();
        this.creadaEn = new Date;
        this.terminada = false;
        this.items = [];   
    }
}