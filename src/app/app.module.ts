import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {samplecomponent} from './sample/sample.component';
import { studentcomponent} from './student/student.component';
//import {studentcomponenttax } from './student/student.component.tax';



@NgModule({
  declarations: [
    AppComponent,samplecomponent,studentcomponent//studentcomponenttax
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,samplecomponent,samplecomponent]//studentcomponenttax]
})
export class AppModule { }
