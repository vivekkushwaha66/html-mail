import { Tag } from "../models/tag.model";
import { TagValidator } from "../validators/tag.validator";

export class TagBuilder {
    private _tag: Tag = null;
    private _tagValidator = new TagValidator();

    constructor(name: string) {
        this._tagValidator.checkSupportedTag(name);
        this._tag = new Tag(name);
    }

    setStyle(key: string, value: string) {
        this._tagValidator.checkNullOrEmptyKey(key);
        this._tagValidator.checkNullOrEmptyValue(value);
        this._tag.addStyle({ key, value });
        return this;
    }

    setAttribute(key: string, value: string) {
        this._tagValidator.checkNullOrEmptyKey(key);
        this._tagValidator.checkNullOrEmptyValue(value);
        this._tag.addAttribute({ key, value });
        return this;
    }

    addChild(tag: Tag) {
        this._tag.addChild(tag);
        return this;
    }

    ref() {
        return this._tag;
    }

    build() {
        return this._tag.definition();
    }
}