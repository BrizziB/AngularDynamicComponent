import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ContainerDynamicComponent} from './dynamic-components/container-dynamic.component';
import { TabbedPanelDynamicComponent} from './dynamic-components/tabbedPanel-dynamic.component';

import { AppComponent } from './app.component';
import { PDynamicComponent } from './dynamic-components/p-dynamic.component';
import { PageBuildingService } from './services/page-building.service';
import { PlainDivDynamicComponent } from './dynamic-components/plainDiv-dynamic.component';
import { NavElemDynamicComponent } from './dynamic-components/_prove/navElem-dynamic.component';
import { BoxDivDynamicComponent } from './dynamic-components/boxDiv-dynamic.component';
import { OutputDynamicComponent } from './dynamic-components/output-dynamic.component';


@NgModule({
  declarations: [
    AppComponent,
    TabbedPanelDynamicComponent,
    PlainDivDynamicComponent,
    PDynamicComponent,
    NavElemDynamicComponent,
    BoxDivDynamicComponent,
    OutputDynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    TabbedPanelDynamicComponent,
    PlainDivDynamicComponent,
    PDynamicComponent,
    NavElemDynamicComponent,
    BoxDivDynamicComponent,
    OutputDynamicComponent
  ],
  providers: [PageBuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
