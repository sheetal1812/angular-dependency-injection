import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HighlightDirective } from './highlight.directive';
import { InspectorComponent } from './inspector/inspector/inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    HighlightDirective,
    InspectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
