let a = {
    name:"Raj",
    age:23,
    weight:70,

//---Ways to Give Function as Property to the Object literal.---//

    b(){ },                 //a "Method shorthand" and not a normal Function Declaration(StandAlone in nature).
    c:()=>{ },              //Arrow Function.
    d:function(){ },        //Function Expression similar to Mthod Shorthand Internally.
    e:function f(){}        //NAMED Function Expression.
}
