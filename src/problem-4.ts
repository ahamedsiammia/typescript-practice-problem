type Ourproduct ={
    id:number;
    name:string;
    price:number;
    description:string;
    stock:number;
};

type newProduct =Omit<Product,"description"|"stock">

const detactObject =(user:newProduct)=>{
    const myUser = {
        id:user.id,
        name:user.name,
        price:user.price
    };
    return myUser
};

const myProduct = {
    id:234,
    name:"wer",
    price:253,
    description:"skdfjowe kdfho mdhjfo",
    stock:34

};

const chack = detactObject(myProduct);
console.log(chack);