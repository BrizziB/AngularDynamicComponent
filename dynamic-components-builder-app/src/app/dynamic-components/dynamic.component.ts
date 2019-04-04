import { v4 as uuid } from 'uuid';

export abstract class DynamicComponent {
  public context: any;
  protected uuid: string;

  constructor() {
    this.uuid = uuid();
  }

  getUUID() {
    return this.uuid;
  }
}
