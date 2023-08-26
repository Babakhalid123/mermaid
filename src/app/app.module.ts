import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassDiagramModule } from './components/design/class-diagram.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClassDiagramModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
