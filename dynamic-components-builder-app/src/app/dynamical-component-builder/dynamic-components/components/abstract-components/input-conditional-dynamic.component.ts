import { Component, Input, OnInit } from '@angular/core';
import { LeafDynamicComponent } from './_input-dynamic.component';


@Component({
  selector: 'app-dynamic-std-input',
  template: `no template
  `
})
export abstract class InputConditionalDynamicComponent extends LeafDynamicComponent implements OnInit{

  propertyName: string;
  propertyValue: string|number;

  public conditionController: LeafDynamicComponent;
  public conditionValue: string;

  activatingValues: string[];
  isHidden = false;

  constructor() {
      super();
  }

  public checkIfHidden(): void {
    this.isHidden = ! this.activatingValues.includes(this.conditionValue);

  }

  ngOnInit() {
    this.conditionController.subscribe(this);
    this.conditionValue = this.conditionController.propertyValue;
    this.checkIfHidden();
  }





}
