"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** scroll the element to the viewable area */
function showIntoView(target, list) {
    var _a, _b, _c;
    if (!list)
        list = target === null || target === void 0 ? void 0 : target.parentElement;
    var top = (_a = target === null || target === void 0 ? void 0 : target.offsetTop) !== null && _a !== void 0 ? _a : 0;
    var listTop = (_b = list === null || list === void 0 ? void 0 : list.scrollTop) !== null && _b !== void 0 ? _b : 0;
    var listHeight = (_c = list === null || list === void 0 ? void 0 : list.offsetHeight) !== null && _c !== void 0 ? _c : 0;
    if (top - listTop > listHeight || top < listTop) {
        list === null || list === void 0 ? void 0 : list.scrollTo({ top: top });
    }
}
exports.default = showIntoView;
