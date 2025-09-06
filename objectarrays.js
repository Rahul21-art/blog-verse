let person={
    name:"rahul",
    age:21,
}
console.log(person);

let fruits=["apple","banana","grapes"];
console.log(fruits);

let numbers=[1,2,3,4,5,6];

let squaredNumbers=numbers.map((num)=>num+2);//gives the square of every element in the array named with numbers
console.log(squaredNumbers);

let even=numbers.filter((num)=>num%2===0);//gives the even numbers from the array named with numbers
console.log(even);

let sum=numbers.reduce((present,num)=>present+num,0);//gives the sum of all the elements in the array named with numbers
console.log(sum);

let person1={
    name:"naidu",
    marks:85,
}
let person2={
    name:"ramu",
    marks:90,
}
let person3={
    name:"sai",
    marks:9430
}
let persons=[person1,person2,person3];
console.log(persons);

let topScorer=persons.reduce((max,person)=>(max.marks>person.marks)?max:person);
console.log(topScorer);
