import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { FormsModule } from '@angular/forms';
import { MatricesFormComponent } from './components/matrices-form/matrices-form.component';
import { ResultsPageComponent } from './components/results-page/results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    MatricesFormComponent,
    ResultsPageComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
