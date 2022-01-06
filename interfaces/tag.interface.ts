import { IAttribute } from './attribute.interface';
import { IStyle } from './style.interface';

export interface ITag {
  addStyle(style: IStyle): void;
  addAttribute(attribute: IAttribute): void;
}
