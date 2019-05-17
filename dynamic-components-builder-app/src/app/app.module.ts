import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageBuildingService } from './services/page-building.service';

import { MaterialModule } from './material.module';
import { MaterialBoxComponent } from './dynamic-components/components/material-components/material-box-container.component';
import { MaterialComboInputComponent } from './dynamic-components/components/material-components/material-combo-input.component';
import { MaterialPlainComponent } from './dynamic-components/components/material-components/material-plain-container.component';
import { MaterialPlainInputComponent } from './dynamic-components/components/material-components/material-plain-input.component';
import { MaterialTabbedComponent } from './dynamic-components/components/material-components/material-tabbed-container.component';
import { MaterialTableComponent } from './dynamic-components/components/material-components/material-table-container.component';

import { CustomBoxComponent } from './dynamic-components/components/custom-components/custom-box-container.component';
import { CustomComboInputComponent } from './dynamic-components/components/custom-components/custom-combo-input.component';
import { CustomPlainComponent } from './dynamic-components/components/custom-components/custom-plain-container.component';
import { CustomPlainInputComponent } from './dynamic-components/components/custom-components/custom-plain-input.component';
import { CustomTabbedComponent } from './dynamic-components/components/custom-components/custom-tabbed-container.component';
import { CustomTableComponent } from './dynamic-components/components/custom-components/custom-table-container.component';

import { BaseComponent } from './base.component';
import { MaterialTextInputComponent } from './dynamic-components/components/material-components/material-text-input.component';
import { CustomTextInputComponent } from './dynamic-components/components/custom-components/custom-text-input.component';
import { MaterialConditionalInputComponent
} from './dynamic-components/components/material-components/material-conditional-input.component';
import { CustomConditionalInputComponent } from './dynamic-components/components/custom-components/custom-conditional-input.component';
import { MaterialCompositeLeafComponent } from './dynamic-components/components/material-components/material-composite-leaf.component';
import { CustomCompositeLeafComponent } from './dynamic-components/components/custom-components/custom-composite-leaf.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MaterialBoxComponent,
    MaterialComboInputComponent,
    MaterialPlainComponent,
    MaterialPlainInputComponent,
    MaterialTabbedComponent,
    MaterialTableComponent,
    MaterialTextInputComponent,
    MaterialConditionalInputComponent,
    MaterialCompositeLeafComponent,

    CustomBoxComponent,
    CustomComboInputComponent,
    CustomPlainComponent,
    CustomPlainInputComponent,
    CustomTabbedComponent,
    CustomTableComponent,
    CustomTextInputComponent,
    CustomConditionalInputComponent,
    CustomCompositeLeafComponent,

    BaseComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  entryComponents: [
    MaterialBoxComponent,
    MaterialComboInputComponent,
    MaterialPlainComponent,
    MaterialPlainInputComponent,
    MaterialTabbedComponent,
    MaterialTableComponent,
    MaterialTextInputComponent,
    MaterialConditionalInputComponent,
    MaterialCompositeLeafComponent,

    CustomBoxComponent,
    CustomComboInputComponent,
    CustomPlainComponent,
    CustomPlainInputComponent,
    CustomTabbedComponent,
    CustomTableComponent,
    CustomTextInputComponent,
    CustomConditionalInputComponent,
    CustomCompositeLeafComponent
  ],
  providers: [PageBuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
