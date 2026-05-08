"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anythink;
anythink = 234;
anythink.toString();
const kgToGramConverter = (input) => {
    if (typeof input === "number") {
        return `Number`;
    }
    else if (typeof input === "string") {
        return `String`;
    }
};
const result1 = kgToGramConverter(3);
const result2 = kgToGramConverter("34 kg");
console.log({ result1, result2 });
//# sourceMappingURL=typeAssertion.js.map