function Person(name,age,height){         //Constructor function 

    this.name=name;
    this.age=age;
    this.height=height;

    //A Normal Nested Function,(Since Even a constructor function is a normal JS Function by heart.)
    function raj(){ }
    raj();

}
Person.prototype.raj=()=>{console.log("Say Hello")};
Person.prototype.jar=()=>{console.log("Say Hello")};
/* 
    Person.prototype={

        constrcutor:Person,             👈 this particular key:value must be written, or the type "constructor" will change to something else. 

        raj(){
        console.log("Say Hello")
        },
        
        jar = function(){
        console.log("Say Hello")
        }
    };
*/
let Raj = new Person("Raj",23,175);