interface Developer<T,X=null> {
    name:string;
    salry:number;
    device:{
        brand:string;
        modal:string;
        releasedYear:string
    },
    smartWatch:T,
    bike?:X
};

interface PoorWatch {
    hartRate:string;
    stopWatch:boolean;
};

interface RichWatch {
    hartRate:string;
    stopWatch:boolean;
    calculator:boolean;
    AiFeature:boolean;
    callSuport:boolean;
}


const poorDeveloper :Developer<PoorWatch> = {
    name:"Mr.poor",
    salry:345,
    device:{
        brand:"lanavo",
        modal:"A345",
        releasedYear:"2018"
    },
    smartWatch:{
        hartRate:"200",
        stopWatch:true
    }
    
};


const RichDeveloper :Developer<RichWatch> = {
    name:"Mr.Rich",
    salry:345,
    device:{
        brand:"Hp",
        modal:"A32345",
        releasedYear:"2024"
    },
    smartWatch:{
        hartRate:"200",
        stopWatch:true,
        calculator:true,
        AiFeature:true,
        callSuport:true
    }
    
};


