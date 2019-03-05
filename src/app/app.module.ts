import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { ColorDirective } from './color.directive';
import { HeightDirective } from './height.directive';
import { WidthDirective } from './width.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ColorDirective,
    HeightDirective,
    WidthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
