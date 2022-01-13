import { IAttribute } from '../interfaces/attribute.interface';
import { IStyle } from '../interfaces/style.interface';
import { ITag } from '../interfaces/tag.interface';

export class Tag implements ITag {
    private _name: string;
    private _styles: Array<IStyle> = new Array<IStyle>();
    private _attributes: Array<IAttribute> = new Array<IAttribute>();
    private _children: Tag[] = [];

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
        if (index > -1) {
            console.warn(`Style '${style.key}' already exists, hence updating it`);
            this.updateStyle(style);
        }
        else {
            this._styles.push(style);
        }
    }

    addAttribute(attribute: IAttribute): void {
        const index = this.findAttributeIndex(attribute.key);
        if (index > -1) {
            console.warn(`Attribute '${attribute.key}' already exists, hence updating it`);
            this.updateAttribute(attribute);

        } else {
            this._attributes.push(attribute);
        }
    }


    updateStyle(style: IStyle): void {
        const index = this.findStyleIndex(style.key);
        if (index > -1) this._styles[index] = style;
    }

    updateAttribute(attribute: IAttribute): void {
        const index = this.findAttributeIndex(attribute.key);
        if (index > -1) this._attributes[index] = attribute;
    }

    stylesDefinition() {
        if (this._styles.length === 0) return '';
        const defs = this._styles.map(x => `${x.key}:${x.value}`);
        if (defs.length > 1) {
            return ` style="${defs.join(';')}"`;
        }
        return ` style="${defs};"`;
    }

    addChild(tag: Tag) {
        this._children.push(tag);
    }

    attributesDefinition() {
        if (this._attributes.length === 0) return '';
        const attributes = this._attributes.map(x => `${x.key}="${x.value}"`);
        if (attributes.length > 1) return ` ${attributes.join('')}`
        return ` ${attributes.join(" ")}`;
    }

    childrenDefinition() {
        if (this._children.length === 0) return '';
        const childDefs = this._children.map(x => x.definition());
        return childDefs.join("\n");
    }

    definition(): string {
        return `<${this._name}${this.attributesDefinition()}${this.stylesDefinition()}>${this.childrenDefinition()}</${this._name}>`;
    }
}