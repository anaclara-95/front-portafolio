export class Persona{     
    id?:number;
    name:string;
    lastName:string;
    birth:string;
    email:string;
    imgPer:string;

    constructor(name: string, lastName: string, birth: string, email: string, imgPer: string){
        this.name = name;
        this.lastName = lastName;
        this.birth = birth;
        this.email = email;
        this.imgPer = imgPer;
    }
}