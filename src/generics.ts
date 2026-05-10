// dinamically generalize 

type GenericsArray<value> = Array<value>

// const friends:string[]=["Mr.X","Mr.Y","Mr.Z"];
const friends:GenericsArray<string>=["Mr.X","Mr.Y","Mr.Z"];

// const rollNumber:number[]=[23,32,53];
const rollNumber:GenericsArray<number>=[23,32,53];


// const isEligibleList :boolean[] = [true,false,true];
const isEligibleList :GenericsArray<boolean> = [true,false,true];

type Coordinates<X,Y> =[X,Y];

const coordinates:Coordinates<number,number>=[21,85]
const coordinates2:Coordinates<string,string>=["siam","Mazba"];


const userList:GenericsArray<{name:string,age:number}> = [
    {
        name:"Mazba",
        age:32
    },
    {
        name:"siam",
        age:18
    },
    {
       name:"abul",
       age:50
    }
]