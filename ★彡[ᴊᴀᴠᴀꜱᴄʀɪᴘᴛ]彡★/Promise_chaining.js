const step1=() =>{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            console.log("Step-1 completed");
            resolve("Data from step1");
        },1000);
    });
};

const step2=() =>{
    return new Promise((resolve) =>
    {
        setTimeout(() =>{
            console.log)("Step-2 completed!");
            resolve("Data fromk step-2");
        });
    });
};

const step3=() =>{
    return new Promise((resolve) =>
    {
        setTimeout(() =>{
            console.log)("Step-3 completed!");
            resolve("Data fromk step-3");
        });
    });
};


let p1=step1();
p1.then((result) =>
{
    return step2(result1);
})