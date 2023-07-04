import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormsModule } from './forms/my-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
