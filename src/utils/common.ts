export function halfWidthToFullWidth(str: string) {
    return str.replace(/[!-~]/g, (char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 0x0021 && charCode <= 0x007e) {
            return String.fromCharCode(charCode + 0xfee0);
        }
        return char;
    });
}
