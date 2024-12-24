let button=document.getElementById("btn");

// button.addEventListener("click", () => 
// {
//     alert("I was clicked!");
// })

button.addEventListener("dblclick", ()=> 
{
    document.querySelector(".box").innerHTML ="<b> Yayy you were clicked !</b>Enjoy your click!!"
})