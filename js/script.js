let price, crust_price, topping_price;
let total = 0;
class Getpizza {
  constructor(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
  }
}

$(document).ready(function () {
  $("button.proceed").click(function (event) {
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    if (psize === "0") {
      price = 0;
    }
    else if (psize === "large") {
      price = 1200;
      console.log(price);
    }
    else if (psize === "medium") {
      price = 850;
      console.log(price);
    }
    else if (psize === "small") {
      price = 600;
      console.log(price);
    }
    else {
      console.log("No price")
    }


    if (pcrust === "0") {
      crust_price = 0;
    }
    else if (pcrust === "Crispy") {
      crust_price = 200;
    }
    else if (pcrust === "Stuffed") {
      crust_price = 250;
    }
    else if (pcrust === "Gluten-free") {
      crust_price = 180;
    }
    else {
      console.log("No price");
    }
    
    
});