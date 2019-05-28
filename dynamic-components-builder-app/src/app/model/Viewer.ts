import { Persistence } from './Persitence';
import { Type } from './Type';

export class Viewer {
  persistable: Persistence;
  type: Type;
  name: String;
  description: String;
  css: String;
  readOnly: Boolean;
  anonymus: Boolean;

}
