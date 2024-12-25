const api=() =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() =>
        {
            console.log("Weather Data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(params) {
    await api(); //await means we are waiting for this to complete hehe ! 
}