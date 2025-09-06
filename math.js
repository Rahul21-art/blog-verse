function  greet()
{
    console.log("welcome")
}

greet();

//add
function add(a,b)
{
    return a+b
}


//subtract
function subtract(a,b)
{
return a-b  
}


//square
export const square=(x)=>x*x


//factorial
export const factorial=(n)=>{
    if(n===0 || n===1)
    {
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}


const divide=(x,y)=>{
    return x/y;
}

export default divide
