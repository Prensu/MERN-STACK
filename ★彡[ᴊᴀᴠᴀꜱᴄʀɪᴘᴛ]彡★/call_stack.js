setTimeout(function() 
{
    console.log("Timer hELLO !");
},5000);

function x(y)
{
    console.log("X");
    y();
})

x((function y()
{
    console.log("Y");
});

