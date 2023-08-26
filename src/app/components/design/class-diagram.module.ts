import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClassDiagramComponent } from './class-diagram.component';


@NgModule({
  declarations: [
    ClassDiagramComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports:[ClassDiagramComponent],
  bootstrap: [ClassDiagramComponent]
})
export class ClassDiagramModule { }
