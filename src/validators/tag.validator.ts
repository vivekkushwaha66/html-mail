import { SUPPORTED_TAGS } from "../constants/supported-tags";
import { SUPPORTED_STYLES } from "../constants/supported-styles";


export class TagValidator {

    checkSupportedTag(tagName: string) {
        const isTagSupported = SUPPORTED_TAGS.findIndex(x => x === tagName.trim().toLowerCase());
        if (isTagSupported < 0) {
            throw new Error(`${tagName} is not supported`);
        }
    }

    checkSupportedStyle(styleName: string) {
        const isStyleSupported = SUPPORTED_STYLES.findIndex(x => x === styleName.trim().toLowerCase());
        if (isStyleSupported < 0) {
            throw new Error(`${styleName} is not supported`);
        }
    }

    checkNullOrEmptyKey(key: string) {
        if (!key) throw Error('key cannot be null or undefined');
        if (key && key.trim() === '') throw Error('key cannot be empty');
    }

    checkNullOrEmptyValue(value: string) {
        if (!value) throw Error('value cannot be null or undefined');
        if (value && value.trim() === '') throw Error('value cannot be empty');
    }



}