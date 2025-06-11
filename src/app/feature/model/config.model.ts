import { StructureModel } from './structure.model';

export interface ConfigModel {
  topic: string;
  editor: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  structure: StructureModel;
}
