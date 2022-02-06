export class Calendar{
    title: string;
    start: string;
    end: string;
    description: string;
    backgroundColor: string;
    borderColor: string;

    constructor(title:string,start: string, end: string, description: string, backgroundColor: string,borderColor: string){
        this.title = title;
        this.start = start;
        this.end =  end;
        this.description = description;      
        this.backgroundColor = backgroundColor;  
        this.borderColor = borderColor;
    }
}