import {state, animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matrix } from 'src/app/models/matrix';
import { BankerService } from 'src/app/services/banker.service';

@Component({
  selector: 'app-matrices-form',
  templateUrl: './matrices-form.component.html',
  styleUrls: ['./matrices-form.component.css'],
  animations: [
    trigger('cardSweep', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', animate('300ms ease-out')),
      transition(':leave', animate('300ms ease-in'))
    ])]
})
export class MatricesFormComponent implements OnInit {

  matrices:Matrix[]=[new Matrix("Allocation Matrix",4,3),new Matrix("Maximum Need Matrix",4,3),
new Matrix('Available Matrix',1,3)];
  selectedMatrixIndex=0;
  cardState:boolean=true;



  constructor(private router:Router,private bankerService:BankerService) { }

  ngOnInit(): void {
    this.bankerService.resetData();
  }
  private validateMatrix(matrix:Matrix):boolean{
        

    if(this.matrices[this.selectedMatrixIndex].rowsCount>1){
    for(let i=0;i<matrix.rowsCount;i++){
        for(let j=0;j<matrix.columnsCount;j++){

            if(matrix.data[i][j]===undefined || matrix.data[i][j]<0 ){
                console.log(matrix.data[i][j])
                console.log('false')
                return false;
              }
        }
    }  
   
  }else{
    for(let i=0;i<matrix.columnsCount;i++){


      if(matrix.data[i]===undefined || matrix.data[i]<0 ){
        return false;
      }
       }

}

return true;
  }
  
  

  getNextMatrix(){

    //send selectedmatrix to service

  
   let isValidData:boolean=this.validateMatrix(this.matrices[this.selectedMatrixIndex])
    if(!isValidData){
      alert('matrix data is not valid')
      return;
    }


    if(this.selectedMatrixIndex<2){
      

    this.selectedMatrixIndex++;
    }else{



      this.bankerService.setMatricees(this.matrices); 
       this.bankerService.applyBanker( );
    
      this.router.navigateByUrl('/resultsPage');
      this.selectedMatrixIndex=0;//reset


    }



    


  }





}
