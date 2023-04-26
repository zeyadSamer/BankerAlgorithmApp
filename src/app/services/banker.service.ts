import { Injectable } from '@angular/core';
import { Matrix } from '../models/matrix';
import {DynamicMatricesObject } from '../models/DynamicMatrecesObject';
import * as math from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class BankerService {


  private matricees:DynamicMatricesObject={} ;
  private safeSequence:number[]=[];
  private isSafe!:boolean | undefined;




  constructor() { 
   


  }
 public resetData(){
    this.matricees={};
    this.safeSequence=[];
    this.isSafe=undefined;
    this.safeSequence=[];
  }


  public getSafeSequence(){
    return this.safeSequence;
  }
  public getSafeStatus(){
    return this.isSafe;
  }



  public setMatricees(matricees:Matrix[]){

  for(let matrix of matricees){
    let key=matrix.title
    this.matricees[key]=matrix ;
  }




}

private computeNeedMatrix(){

   const maxNeed=this.matricees['Maximum Need Matrix']

   const allocation=this.matricees['Allocation Matrix'];

 
 let needMatrix=Matrix.subtract(maxNeed,allocation);

 return needMatrix
  
}

private isAvailableSatisfyProcessNeed(available:number[],need:number[]):boolean{
  for(let i=0;i<available.length;i++){
    if(available[i]<need[i]){

      return false;
    
    }


  
  }


  return true;

}


private updateAvailableMatrix(resourceReleased:number[]){
  let available=this.matricees['Available Matrix']
  for(let i=0;i<available.data.length;i++){
    available.data[i]+=resourceReleased[i]


  }


}



private isSafeState(needed:Matrix):boolean{

  //this function compares the needed matrix vs the available matrix
 let  available:Matrix=this.matricees['Available Matrix'];
 let allocation:Matrix=this.matricees['Allocation Matrix'];
 
  
 let tookWhatINeedflag:boolean[]=Array(needed.rowsCount).fill(false)//each flag corresponds to a process ,true flag means that the process took what it need
 let numberOfProcesses=needed.rowsCount;
let processFound:boolean=true; 


while(this.safeSequence.length<numberOfProcesses  && processFound){

 processFound=false;
//looping over processes to find one
 for(let i=0;i<numberOfProcesses;i++){

  if(!tookWhatINeedflag[i] && this.isAvailableSatisfyProcessNeed(available.data,needed.data[i])){
 

    processFound=true;
    this.safeSequence.push(i);
    
    this.updateAvailableMatrix(allocation.data[i]);
    tookWhatINeedflag[i]=true;

  }
 


}


}


//step 4 check on flags

for(let flag of tookWhatINeedflag){
  if(flag===false){
 
    this.isSafe=false;
    return false;

  }

}


this.isSafe=true;



return true;



}

applyBanker(){

  let needMatrix=this.computeNeedMatrix();

  return this.isSafeState(needMatrix);

  









}












}
