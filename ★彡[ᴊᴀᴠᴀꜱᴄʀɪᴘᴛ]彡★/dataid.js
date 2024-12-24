function getData(dataId)
{
   setTimeout(() =>
   {
      console.log("Data",dataId);
   },3000);
   
}

getData(123,getData(234));
getData(456);
getData(999);