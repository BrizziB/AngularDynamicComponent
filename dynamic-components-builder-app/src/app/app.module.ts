import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageBuildingService } from './services/page-building.service';

import { MaterialModule } from './material.module';
import { BaseComponent } from './dynamical-component-builder/dynamic-components/components/base.component';

import { MaterialBoxComponent
  } from './dynamical-component-builder/dynamic-components/components/material-components/material-box-container.component';
import { MaterialComboInputComponent
  } from './dynamical-component-builder/dynamic-components/components/material-components/material-combo-input.component';
import { MaterialPlainComponent
  } from './dynamical-component-builder/dynamic-components/components/material-components/material-plain-container.component';
import { MaterialPlainInputComponent
  } from './dynamical-component-builder/dynamic-components/components/material-components/material-plain-input.component';
import { MaterialTabbedComponent
  } from './dynamical-component-builder/dynamic-components/components/material-components/material-tabbed-container.component';
import { MaterialTableComponent
  } from './dynamical-component-builder/dynamic-components/components/material-components/material-table-container.component';
import { MaterialTextInputComponent
  } from './dynamical-component-builder/dynamic-components/components/material-components/material-text-input.component';
import { MaterialConditionalInputComponent
  } from './dynamical-component-builder/dynamic-components/components/material-components/material-conditional-input.component';
import { MaterialCompositeLeafComponent
} from './dynamical-component-builder/dynamic-components/components/material-components/material-composite-leaf.component';

import { CustomBoxComponent
  } from './dynamical-component-builder/dynamic-components/components/custom-components/custom-box-container.component';
import { CustomComboInputComponent
} from './dynamical-component-builder/dynamic-components/components/custom-components/custom-combo-input.component';
import { CustomPlainComponent
} from './dynamical-component-builder/dynamic-components/components/custom-components/custom-plain-container.component';
import { CustomPlainInputComponent
} from './dynamical-component-builder/dynamic-components/components/custom-components/custom-plain-input.component';
import { CustomTabbedComponent
} from './dynamical-component-builder/dynamic-components/components/custom-components/custom-tabbed-container.component';
import { CustomTableComponent
} from './dynamical-component-builder/dynamic-components/components/custom-components/custom-table-container.component';
import { CustomTextInputComponent
} from './dynamical-component-builder/dynamic-components/components/custom-components/custom-text-input.component';
import { CustomConditionalInputComponent
} from './dynamical-component-builder/dynamic-components/components/custom-components/custom-conditional-input.component';
import { CustomCompositeLeafComponent
} from './dynamical-component-builder/dynamic-components/components/custom-components/custom-composite-leaf.component';

import { DynamicViewerComponent } from './dynamical-component-viewer/dynamic.viewer.component';

import {ViewListComponent} from './view.list.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicViewerComponent,

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
    CustomCompositeLeafComponent,

    BaseComponent,
    ViewListComponent

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
  providers: [PageBuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
