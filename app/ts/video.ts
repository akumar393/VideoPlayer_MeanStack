export class Video {
    id:number;
    title:string;
    code:string;
    desc:string;

    constructor( id:number,title:string,code:string,desc:string){
        this.id=id;
        this.title=title;
        this.code=code;
        this.desc=desc;
    }
}