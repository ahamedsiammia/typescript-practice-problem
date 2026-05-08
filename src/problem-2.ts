interface UserInfo {
    name:string;
    email:string;
    age : number
};

const profileUpdate =(user:UserInfo)=>{
  return {...user}
}
const user ={
    name:"siam",
    email:"siam@gmail.com",
    age:43
};

console.log(profileUpdate(user))