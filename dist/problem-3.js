"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product = (user) => {
    const myUser = {
        name: user.name,
        price: user.price
    };
    return myUser;
};
const result = {
    id: 234,
    name: "wer",
    price: 253,
    description: "skdfjowe kdfho mdhjfo",
    stock: 34
};
const call = product(result);
console.log(call);
//# sourceMappingURL=problem-3.js.map