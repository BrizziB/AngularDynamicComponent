import { DynamicComponent } from '../dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { LeafDynamicComponent } from '../leaf-dynamic.component';
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';


@Component({
  selector: 'app-dynamic-nav[class=nav-elem]',
  template: `<li><a href="#">{{context}}</a></li>`,
  styleUrls: ['navElem-dynamic.component.css']
})
export class NavElemDynamicComponent extends LeafDynamicComponent {

  //public context = {};

  constructor() {
      super();

  }





}
