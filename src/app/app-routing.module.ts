import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsPageComponent } from './components/results-page/results-page.component';
import { MatricesFormComponent } from './components/matrices-form/matrices-form.component';

const routes: Routes = [{
  path:'',
  component:MatricesFormComponent
},{
  
  path:'resultsPage',
  component:ResultsPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
