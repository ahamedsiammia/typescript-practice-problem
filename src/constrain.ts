type student = {id:number,name:string}




const addStudentToCourse =<T extends student >(studentInfo:T)=>{
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

const student3 ={
    hasWatch:true
}

const result1= addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);
const result3 = addStudentToCourse(student3);


console.log({result1,result2});