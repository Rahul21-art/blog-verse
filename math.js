function  greet()
{
    console.log("welcome")
}

greet();

function add(a,b)
{
    return a+b
}
result=add(5,5)
console.log(result)

function subtract(a,b)
{
return a-b  
}
result=subtract(10,5)
console.log(result)

const square=(x)=>x*x
console.log(square(5))

const factorial=(n)=>{
    if(n===0 || n===1)
    {
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5))