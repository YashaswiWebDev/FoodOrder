export class Foods{
    id!:number;
    name!: string;
    price!:number;
    favorite:boolean=false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cooktime!:string;
    origins!:string[];
}