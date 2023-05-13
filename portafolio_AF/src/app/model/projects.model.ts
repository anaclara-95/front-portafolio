export class Projects{
    id?: number;
    nameP: string;
    descP: string;
    urlcP: string;
    urlpP: string;
    imgP: string;

    constructor(nameP: string, descP: string, urlcP: string, urlpP: string, imgP: string) {
        this.nameP=nameP;
        this.descP=descP;
        this.urlcP=urlcP;
        this.urlpP=urlpP;
        this.imgP=imgP;

    }
}