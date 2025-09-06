const sampleData=async()=>{
    try{
    const response=await fetch('https://www.devastra.jntugv.cev');
    const data=await response.json();
    console.log(response);
}
catch (error){
    console.log("error"+error);
}
} 
sampleData()