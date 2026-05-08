type Product ={
    id:number;
    name:string;
    price:number;
    description:string;
    stock:number;
};

type newObject =Pick<Product,"name"|"price">

const product =(user:newObject)=>{
    const myUser = {
        name:user.name,
        price:user.price
    };
    return myUser
};

const result = {
    id:234,
    name:"wer",
    price:253,
    description:"skdfjowe kdfho mdhjfo",
    stock:34

};

const call = product(result);
console.log(call);