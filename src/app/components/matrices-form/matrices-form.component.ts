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
  }

  getNextMatrix(){

    //send selectedmatrix to service
 
    
    if(this.selectedMatrixIndex<2){
      

    this.selectedMatrixIndex++;
    }else{

      console.log(this.matrices);


      this.bankerService.setMatricees(this.matrices); 
       this.bankerService.applyBanker( );
    
      this.router.navigate(['resultsPage']);


    }



    


  }





}
