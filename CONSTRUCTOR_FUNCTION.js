function Person(name,age,height){         //Constructor function 

    this.name=name;
    this.age=age;
    this.height=height;

}
Person.prototype.raj=()=>{console.log("Say Hello")};
Person.prototype.jar=()=>{console.log("Say Hello")};
/* 
    Person.prototype={

        raj(){
        console.log("Say Hello")
        },
        
        jar = function(){
        console.log("Say Hello")
        }
    };
*/
let Raj=new Person("Raj",23,175);