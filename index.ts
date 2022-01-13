import { Tag } from "./src/models/tag.model";
import { IAttribute } from "./src/interfaces/attribute.interface";
import { TagBuilder } from "./src/builder/tag.builder";
const builder = new TagBuilder('html');

const definiton = builder
    .setAttribute('', '')
    .setStyle('', '')
    .build();
console.log(definiton)  