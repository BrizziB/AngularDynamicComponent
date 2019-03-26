import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicContentComponent,
  DynamicSample1Component,
  DynamicSample2Component,
  UnknownDynamicComponent  } from './dynamic-content/dynamic-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicContentComponent,
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent,
    DynamicContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
