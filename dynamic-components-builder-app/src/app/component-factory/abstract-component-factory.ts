import {ComponentFactoryResolver} from '@angular/core';


export abstract class AbstractComponentFactory {

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver) {
    }

    public abstract getPlainContainerFactory();
    public abstract getBoxContainerFactory();
    public abstract getTabbedContainerFactory();
    public abstract getTableContainerFactory();
    public abstract getComboInputFactory();
    public abstract getPlainInputFactory();
    public abstract getTextInputFactory();

}
