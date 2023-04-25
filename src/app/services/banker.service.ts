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
  resetData(){
    this.matricees={};
    this.safeSequence=[];
    this.isSafe=undefined;
    this.safeSequence=[];
  }


  getSafeSequence(){
    return this.safeSequence;
  }
  getSafeStatus(){
    return this.isSafe;
  }



setMatricees(matricees:Matrix[]){

  for(let matrix of matricees){
    let key=matrix.title
    this.matricees[key]=matrix ;
  }

  console.log('received matricees')
  console.log(matricees)
//to be removed
  
  console.log('test')
  console.log(this.matricees)

}

private computeNeedMatrix(){

   const maxNeed=this.matricees['Maximum Need Matrix']

   const allocation=this.matricees['Allocation Matrix'];

 
 let needMatrix=Matrix.subtract(maxNeed,allocation);
 console.log('need',needMatrix)

 return needMatrix
  
}

private isAvailableSatisfyProcessNeed(available:number[],need:number[]):boolean{
  for(let i=0;i<available.length;i++){
    if(available[i]<need[i]){
      console.log(`availabilty failed`)
      console.log(available,need)
      return false;
    
    }


  
  }
  console.log('availability success')

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
  console.log('am here,this is safe seq')
  console.log(this.safeSequence)

 processFound=false;
//looping over processes to find one
 for(let i=0;i<numberOfProcesses;i++){

  if(!tookWhatINeedflag[i] && this.isAvailableSatisfyProcessNeed(available.data,needed.data[i])){
    console.log('entered that if')
    

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
    console.log('unsafe')
    this.isSafe=false;
    return false;

  }

}

console.log('safe sequence:');
console.log(this.safeSequence);
this.isSafe=true;



return true;



}

applyBanker(){

  let needMatrix=this.computeNeedMatrix();

  return this.isSafeState(needMatrix);

  









}












}
