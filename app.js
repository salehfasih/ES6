
// Destructureing of object
// // Destructureing of array
// let obj={

//  name : "Ghous",
//  mail :"sualehfseeh123@gmail.com"

// }
// let name=obj.mail;
// console.log(name);

// let arr=["sualeh","basit","umair"];

// let [name1,name2,name3]=arr;
// console.log(name3+name2);

// function expression;

// // es5 function
// function name(params) {
    
// }

// let foo=function  (){

//      console.log("hello world");
// }

// foo();
// arrow  function => is replace function keyword
// the comma is back tick and topic is tamplete literal

//  let hello=(name)  => {

//    console.log(`my name is ${name}`);

//  }
//  hello("sualeh");


//  higher order function
// call back function parameter me function asa arguement le
// leta hua 
// let get_data=()=>{
    
// setTimeout((renderdata) => {
    
//     renderdata("sualeh")
// }, 3000);

// }
// let renderdata=(name)=>{

//     console.log(name);
// }



//get_data(renderdata());
//  arry function
// filter 

// let arr=[{name:"sualeh", :"20",},{name:"usman",age:"22",}];

// let filter =arr.filter(a=> a.age >10); 

// console.log(filter);

// // search function in js

// let name="sualeh";
// let search="s";
// console.log(name.startsWith(search))
// // if (name.startsWith(name)) {

// console.log(name);
    
// }

// map in array

// let arr2=[2,3,4,5];

// let multiply=arr2.map(a=>a*2);

// console.log(multiply[2]);

//async to wait the completeion of the task
// await is a keyword that is used for statement is done then 
// execute next statement

async  function get_data() {
    let data= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    console.log(data);
}

// classes es6
// function student(name,age) {

//   this.name=name;
//   this.age=age;
  
// }

// let student1=new student("sualeh","20");
// console.log(student1);

// class in es6

class  Student {

  constructor(name,age,gmail){
        this.name=name;
        this.age=age;
        this.gmail=gmail;
     
     function makemoney(){
              
      console.log("hello world");
    }

  }
}

let student1=new  Student("sualeh","20","sualehfseeh123@gmail.com");

console.log(student1);

class    hello extends Student{

       constructor(name,age,gmail){
         super(name,age,gmail);


       }


        makemoney(){
              
        console.log("hello world");
      }
  
       

       

}




let student2=new hello();

console.log(student2.makemoney );

// promise in js 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(function (result){

    console.log("result==>"+result)
  })
  .catch(function(error ){
   
    console.log("error==>"+error);

  })