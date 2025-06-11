import {SectionsModel} from "./sections.model";

export interface StructureModel {
  title: string;
  author: string;
  sections: SectionsModel[];
  posterLink: string;
}
