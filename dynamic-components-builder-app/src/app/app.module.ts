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
import { BaseComponent } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/base.component';

import { MaterialBoxComponent
  } from'./view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-box-container.component';
import { MaterialComboInputComponent
  } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-combo-input.component';
import { MaterialPlainComponent
  } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-plain-container.component';
import { MaterialPlainInputComponent
  } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-plain-input.component';
import { MaterialTabbedComponent
  } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-tabbed-container.component';
import { MaterialTableComponent
  } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-table-container.component';
import { MaterialTextInputComponent
  } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-text-input.component';
import { MaterialConditionalInputComponent
  } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-conditional-input.component';
import { MaterialCompositeLeafComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/material-components/material-composite-leaf.component';

import { CustomBoxComponent
  } from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-box-container.component';
import { CustomComboInputComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-combo-input.component';
import { CustomPlainComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-plain-container.component';
import { CustomPlainInputComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-plain-input.component';
import { CustomTabbedComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-tabbed-container.component';
import { CustomTableComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-table-container.component';
import { CustomTextInputComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-text-input.component';
import { CustomConditionalInputComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-conditional-input.component';
import { CustomCompositeLeafComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/custom-components/custom-composite-leaf.component';

import { BootstrapBoxComponent
} from'./view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-box-container.component';
import { BootstrapComboInputComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-combo-input.component';
import { BootstrapPlainComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-plain-container.component';
import { BootstrapPlainInputComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-plain-input.component';
import { BootstrapTabbedComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-tabbed-container.component';
import { BootstrapTableComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-table-container.component';
import { BootstrapTextInputComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-text-input.component';
import { BootstrapConditionalInputComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-conditional-input.component';
import { BootstrapCompositeLeafComponent
} from './view/dynamical-viewers/dynamical-component-builder/dynamic-components/components/bootstrap-components/bootstrap-composite-leaf.component';

import { MaterialDynamicViewerComponent } from './view/dynamical-viewers/dynamical-component-viewer/material/dynamic.viewer.component';
import { BootstrapDynamicViewerComponent } from './view/dynamical-viewers/dynamical-component-viewer/bootstrap/dynamic.viewer.component';

import { MaterialViewListComponent} from './view/views/material-views/view.list.component';
import { MaterialViewEditComponent } from './view/views/material-views/view.edit.component';
import { MaterialHomeComponent } from './view/views/material-views/home.mat.component';

import { BootstrapViewListComponent} from './view/views/bootstrap-views/view.list.component';
import { BootstrapViewEditComponent } from './view/views/bootstrap-views/view.edit.component';
import { BootstrapHomeComponent } from './view/views/bootstrap-views/home.boot.component';

import { DataTablesModule } from 'angular-datatables';

import { ViewerListService } from './services/viewer-list.service';
import { ViewerEditService } from './services/viewer-edit.service';
import { MatPaginator } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDynamicViewerComponent,
    BootstrapDynamicViewerComponent,
    BaseComponent,

    MaterialHomeComponent,
    MaterialViewListComponent,
    MaterialViewEditComponent,

    BootstrapHomeComponent,
    BootstrapViewListComponent,
    BootstrapViewEditComponent,
    MatPaginator,

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

    BootstrapBoxComponent,
    BootstrapComboInputComponent,
    BootstrapPlainComponent,
    BootstrapPlainInputComponent,
    BootstrapTabbedComponent,
    BootstrapTableComponent,
    BootstrapTextInputComponent,
    BootstrapConditionalInputComponent,
    BootstrapCompositeLeafComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DataTablesModule

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
    CustomCompositeLeafComponent,
    BootstrapBoxComponent,
    BootstrapComboInputComponent,
    BootstrapPlainComponent,
    BootstrapPlainInputComponent,
    BootstrapTabbedComponent,
    BootstrapTableComponent,
    BootstrapTextInputComponent,
    BootstrapConditionalInputComponent,
    BootstrapCompositeLeafComponent
  ],
  providers: [
    PageBuildingService,
    ViewerListService,
    ViewerEditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
