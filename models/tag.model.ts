import { IStyle } from '../interfaces/style.interface';
import { ITag } from '../interfaces/tag.interface';

export class Tag implements ITag {
  private _name: string;
  private _styles: IStyle[] = [];
  private _attributes: IStyle[] = [];
  private _children: ITag[] = [];

  constructor(name: string) {
    this._name = name;
  }
}
