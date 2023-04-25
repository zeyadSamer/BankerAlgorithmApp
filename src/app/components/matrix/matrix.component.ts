import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Matrix } from 'src/app/models/matrix';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  
 

  @Input() matrix!:Matrix;
   tableRows!:number[];
   tableColumns!:number[];


   


  constructor() { }

  ngOnInit(): void {
    this.initializeComponent();



  }

  ngOnChanges(){
    this.initializeComponent()

  }

  

  printMatrix(){

   console.log(this.matrix.data);
}


private initializeComponent(){
  
  this.tableRows=[...Array(this.matrix.rowsCount).keys()];//returns [0,1,2]
    
  this.tableColumns=[...Array(this.matrix.columnsCount).keys()];//returns [0,1,2]
  

  console.log(this.matrix)
 
}




}
