const SUPPORTED_TAGS = [
    'a',
    'b',
    'br',
    'div',
    'font',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'hr',
    'img',
    'label',
    'li',
    'ol',
    'p',
    'span',
    'strong',
    'table',
    'td',
    'th',
    'tr',
    'u',
    'ul',
]

export class TagValidator {

    checkSupportedTag(tagName: string) {
        const isTagSupported = SUPPORTED_TAGS.findIndex(x => x === tagName.trim().toLowerCase());
        if (isTagSupported < 0) {
            throw new Error(`${tagName} is not supported`);
        }
    }
}