function plate(){
    let temp=0;

    return function cup(){
        console.log(temp);      //returns referenced memory of temp and not a copied value
    }
}
let a = plate();
a();