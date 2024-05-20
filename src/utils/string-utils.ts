import { halfWidthToFullWidth } from "./common";

export function removeAllNewLine(value: string) {
    return value.replace(/[\r\n]/g, '').replace(/\s\s+/g, ' ');
}

export function escapeCharForSearch(str: string) {
    str =  str.replace(/[?%\\_]/gi, function (x) {
        return '\\' + x;
    });
    str = halfWidthToFullWidth(str);
    return str;
}
