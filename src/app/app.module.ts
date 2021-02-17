import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ParentComponentComponent, ChildComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
