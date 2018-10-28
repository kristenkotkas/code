import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeLineComponent } from './components/code-line/code-line.component';
import { CheckBoxComponent } from './components/common/check-box/check-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortComponent } from './components/common/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeLineComponent,
    CheckBoxComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
