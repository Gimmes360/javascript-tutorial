
// 1.----------------------------------- FUNCTION SCOPE ------------------------------------

var num1=10;   //--------------------------------- Global scope
function scope(){
    var num2=20;      //--------------------------------- local or function scope
    console.log(num2);
    console.log(num1);     //---------------------------------num1 Accessed within the function
}
console.log(num1);    //---------------------------------num1 Accessed outside the the function i.e globally,within and outside the function,everywhere in the program
//console.log(num2); ---------------------------------num2 not Accessed outside the the function i.e it can be accessed only within the function


scope()


// 2.----------------------------------- BLOCK SCOPE ------------------------------------

let color='red';    //--------------------------------- Global scope

if (color=='red'){       //--------------------------------- Block scope
    let color='blue';
    console.log(color)     //--------------------------------- Accessed within the Block
}
console.log(color)     //--------------------------------- Accessed outside the the Block i.e globally