import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './view/app.component';
import { PageBuildingService } from './services/page-building.service';

import { MaterialModule } from './material.module';
import { BaseComponent } from './view/dynamical-component-builder/dynamic-components/components/base.component';

import { MaterialBoxComponent
  } from './view/dynamical-component-builder/dynamic-components/components/material-components/material-box-container.component';
import { MaterialComboInputComponent
  } from './view/dynamical-component-builder/dynamic-components/components/material-components/material-combo-input.component';
import { MaterialPlainComponent
  } from './view/dynamical-component-builder/dynamic-components/components/material-components/material-plain-container.component';
import { MaterialPlainInputComponent
  } from './view/dynamical-component-builder/dynamic-components/components/material-components/material-plain-input.component';
import { MaterialTabbedComponent
  } from './view/dynamical-component-builder/dynamic-components/components/material-components/material-tabbed-container.component';
import { MaterialTableComponent
  } from './view/dynamical-component-builder/dynamic-components/components/material-components/material-table-container.component';
import { MaterialTextInputComponent
  } from './view/dynamical-component-builder/dynamic-components/components/material-components/material-text-input.component';
import { MaterialConditionalInputComponent
  } from './view/dynamical-component-builder/dynamic-components/components/material-components/material-conditional-input.component';
import { MaterialCompositeLeafComponent
} from './view/dynamical-component-builder/dynamic-components/components/material-components/material-composite-leaf.component';

import { CustomBoxComponent
  } from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-box-container.component';
import { CustomComboInputComponent
} from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-combo-input.component';
import { CustomPlainComponent
} from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-plain-container.component';
import { CustomPlainInputComponent
} from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-plain-input.component';
import { CustomTabbedComponent
} from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-tabbed-container.component';
import { CustomTableComponent
} from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-table-container.component';
import { CustomTextInputComponent
} from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-text-input.component';
import { CustomConditionalInputComponent
} from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-conditional-input.component';
import { CustomCompositeLeafComponent
} from './view/dynamical-component-builder/dynamic-components/components/custom-components/custom-composite-leaf.component';

import { DynamicViewerComponent } from './view/dynamical-component-viewer/dynamic.viewer.component';

import {ViewListComponent} from './view/view.list.component';
import { ViewerListService } from './services/viewer-list.service';
import { ViewEditComponent } from './view/view.edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicViewerComponent,
    BaseComponent,
    ViewListComponent,
    ViewEditComponent,

  // componenti dinamici
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
// componenti dinamici - metterli qui serve per poterli generare a runtime
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
  providers: [
    PageBuildingService,
    ViewerListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
