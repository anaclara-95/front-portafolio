export class Experience {
    id?: number;
    nameE: string;
    ocpE: string;
    dateI: string;
    dateF: string;
    descE: string;
    refE: string;

    constructor(nameE: string, ocpE: string, dateI: string, dateF: string, descE: string, refE: string){
        this.nameE=nameE;
       this.ocpE=ocpE;
        this.dateI=dateI;
        this.dateF=dateF;
        this.descE=descE;
       this.refE=refE;
    }
}

