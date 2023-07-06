// variables
//     |
// functions
//     |
//   output        

var item={
    shoes:500,
    quantity:2,
    totalPrice: function(){
        var calculation=item.shoes * item.quantity;
        console.log("total price is: " , calculation);
    }
}

item.totalPrice();

// ----------------------------------- Using this keyword ------------------------------------

var item={
    shoes:500,
    quantity:2,
    totalPrice: function(){
        var calculation=this.shoes * this.quantity;
        console.log("total price is: " , calculation);
    }
}

item.totalPrice();




