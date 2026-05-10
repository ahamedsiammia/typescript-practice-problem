// GENERICS WITH FUNCTION

// const createArrayWithString =(value:string) => [value];


// const createArrayWithNumber =(value:number)=> [value];


// const createArrayWithObject = (value:{id:number; name:string})=> [value];


const createArrayWithGenerics =<T>(value:T) =>{
    return [value]
}



const arrayString = createArrayWithGenerics("Apple");

const arrayNumber = createArrayWithGenerics(333);

const arrayObject = createArrayWithGenerics({id:34,name:"siam"});


console.log({arrayString,arrayNumber,arrayObject});


const createArrayWithTupe =<X,Y>(value1:X,value2:Y)=>[value1,value2];


const arrayTupe = createArrayWithTupe("siam","ahamed");


console.log(arrayTupe);


//  addStudentToCourse 

const addStudentToCourse =<T>(studentInfo:T)=>{
        return {
        course:"Next Level",
        ...studentInfo
        }
};

const student1 ={
    id:234,
    name:"Mazba",
    hasPan :true
};

const student2 ={
    id:42,
    name:"shafayat",
    hasPan:false,
    hasCar:true
}

const result1= addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);


console.log({result1,result2});