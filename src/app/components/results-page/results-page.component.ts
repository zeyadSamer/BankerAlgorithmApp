import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BankerService } from 'src/app/services/banker.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {



  isSafe!:boolean | undefined;
  sequence!:number[];
  messageSequence!:string[];
  messageClass!:string;
  resultMessage!:string;

  constructor(private bankerService:BankerService,private router:Router) { }

  ngOnInit(): void {



   this.isSafe=this.bankerService.getSafeStatus();
   this.sequence=this.bankerService.getSafeSequence();
   this.messageSequence=this.sequence.map((item)=>'P'+item);

   if(this.isSafe===undefined){
    this.router.navigateByUrl('');
    this.bankerService.resetData();
     
    console.log('hee')
   }



    console.log('isSafe',this.isSafe )

    if(this.isSafe){
      this.messageClass="safe"
      this.resultMessage="Safe"
    }else{
      this.messageClass="unsafe"
      this.resultMessage="Unsafe"
    }
    

  }

}
