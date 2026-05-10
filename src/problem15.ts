interface UserData {
    id:number;
    name:string;
    status:string
};

const ApiResposce =<T>(userData:UserData , productData:T)=>{
        return {
            status: 200,
            data: {
                ...productData
            }
        }
}

const user ={
    id:25,
    name:"Ahamed",
    status:"panding"
};

const product = {
    id:256,
    name:"Key board",
    brand:"Hp",
    model:"AR254",
    price:2600
};

const result = ApiResposce(user,product);

console.log(result);


