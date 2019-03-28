import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DivDynamicComponent} from './dynamic-components/div-dynamic.component';

import { AppComponent } from './app.component';
import { PDynamicComponent } from './dynamic-components/p-dynamic.component';
import { PageBuildingService } from './services/page-building.service';


@NgModule({
  declarations: [
    AppComponent,
    DivDynamicComponent,
    PDynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    DivDynamicComponent,
    PDynamicComponent
  ],
  providers: [PageBuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
