export class Matrix{

    public rowsCount;
    public columnsCount;
    public title:string;

    public data:any[] ; //this array may include numbers(1d) or arrays (2d array)



   









    
    public static  add(a:Matrix,b:Matrix):Matrix{
        let result:Matrix=new Matrix('Matrix',a.rowsCount,a.columnsCount);

        for(let i=0;i<a.rowsCount;i++){
            for(let j=0;j<a.columnsCount;j++){
                result.data[i][j]=a.data[i][j]+b.data[i][j];

            }
        }
        return result;
    }




    public static subtract(a:Matrix,b:Matrix){
        let result:Matrix=new Matrix('Matrix',a.rowsCount,a.columnsCount);

        for(let i=0;i<a.rowsCount;i++){
            for(let j=0;j<a.columnsCount;j++){
                result.data[i][j]=a.data[i][j]-b.data[i][j];

            }
        }
        return result;


    }


    constructor(title='Matrix',rowsCount:number,columnsCount:number){

        this.rowsCount=rowsCount;
        this.columnsCount=columnsCount;
        // creating 2d array and filling at zeroes
        if(rowsCount>1){
        this.data = Array.from({ length: rowsCount }, () => Array.from({ length: columnsCount }));
        }else{
            this.data=Array.from({length:columnsCount},()=>0);
        }
        
        
        this.title=title;
    

    };



    
    







    





}