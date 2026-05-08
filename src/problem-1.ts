type UserCard<T> ={
    id:number;
    data:T
}


const userCard =<T>(obj:UserCard<T>)=>{
    return obj
};

const student ={
    id:234,
    data:"He is student"
}

const result = userCard(student)
console.log(result);