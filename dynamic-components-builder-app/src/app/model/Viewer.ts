import { PersistableImpl } from './PersistableImpl';
import { Type } from './Type';

export class Viewer {
  persistable: PersistableImpl;
  type: Type;
  name: String;
  description: String;
  css: String;
  readOnly: Boolean;
  anonymus: Boolean;

}
