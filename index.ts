import { TagBuilder } from "./src/builder/tag.builder";

const builder = new TagBuilder('a');
const tr = new TagBuilder('br');


const definiton = builder
    .setStyle('border', '1px solid red')
    .setStyle('border', '1px solid red')
    .setStyle('border', '1px solid red')
    .setAttribute('href', 'click here')
    .addChild(tr.ref())
    .build();
console.log(definiton)  