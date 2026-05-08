let anythink : any ; 

anythink = 234;

(anythink as number).toString();


const kgToGramConverter =(input: number|string)=>{
        if(typeof input ===  "number"){
            return input*1000;
        }
        else if(typeof input === "string"){
            const value=input.split("")[0]
            return `Converted output :${Number(value)*1000}`;
        }
};

const result1 = kgToGramConverter(3);
const result2 = kgToGramConverter("34 kg");

console.log({result1,result2});
