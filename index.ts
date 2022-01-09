import { Tag } from "./src/models/tag.model";
import { IAttribute } from "./src/interfaces/attribute.interface";
const tag =  new Tag('html');
const att: IAttribute = { key: 'version', value: '5'};
tag.addAttribute(att);

console.log(tag.definition())