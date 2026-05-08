// interface 

type User ={
    name:string;
    age:number;
};

type Role ={
    role:"admin"|"user"
}

interface Iuser{
    name:string;
    age:number
}

type UserWithRole = User & Role; 

interface IuserWithRole extends Iuser {
    role:"admin"|"user"
};

const user1 : IuserWithRole={
    name:"siam",
    age :18,
    role:"user"
};

const user2:UserWithRole={
    name:"Mazba",
    age :25,
    role:"admin"
};

type Friends = string[];

const friends:IFriends =["A","B","C"];

interface IFriends {
    [index:number]:string
}

type Add =(num1:number,num2:number) => number;

interface IAdd {
    (num1:number,num2:number):number
}

const add : IAdd =(num1,num2)=>{

}