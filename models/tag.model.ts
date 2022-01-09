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

  findStyleIndex(key: string) {
    const index = this._styles.findIndex(x => x.key === key);
    return index;
  }

  findAttributeIndex(key: string) {
    const index = this._attributes.findIndex(x => x.key === key);
    return index;
  }

  addStyle(style: IStyle): void {
    const index = this.findStyleIndex(style.key);
    if (index > -1) this.updateStyle(style);
    else this._styles.push(style);
  }

  addAttribute(attribute: IAttribute): void {
    const index = this.findAttributeIndex(attribute.key);
    if (index > -1) this.updateAttribute(attribute);
    else this._attributes.push(attribute);
  }


  updateStyle(style: IStyle): void {
    const index = this.findStyleIndex(style.key);
    if (index > -1) this._styles[index] = style;
  }

  updateAttribute(attribute: IAttribute): void {
    const index = this.findAttributeIndex(attribute.key);
    if (index > -1) this._attributes[index] = attribute;
  }
}