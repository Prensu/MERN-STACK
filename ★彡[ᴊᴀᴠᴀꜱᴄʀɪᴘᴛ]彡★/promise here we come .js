function async(){
    return new Promise((resolve,reject) =>
    {
        setTimeout(() =>{
            console.log("some data1");
            resolve("success");
        },2000);
    })
}
console.log("Fetching data");
let p1=async() ;

p1.then((res) =>
{
    console.log("res");
})