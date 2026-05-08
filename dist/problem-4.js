"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const detactObject = (user) => {
    const myUser = {
        id: user.id,
        name: user.name,
        price: user.price
    };
    return myUser;
};
const myProduct = {
    id: 234,
    name: "wer",
    price: 253,
    description: "skdfjowe kdfho mdhjfo",
    stock: 34
};
const chack = detactObject(myProduct);
console.log(chack);
//# sourceMappingURL=problem-4.js.map