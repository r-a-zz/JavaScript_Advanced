function a(){
    console.log("When a(), 'THIS' is : ",this)         //Logs Window Object (Becasue a() is called normally OR Plain functionn call.)
    
    b();
    function b(){
        console.log("When b(), 'THIS' is :",this);     //Logs Window Object (Similar reason).
    }
}
a();