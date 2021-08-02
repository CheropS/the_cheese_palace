//business logic 
function Contact(first) {
this.firstName = first;
}

//user interface logic 
$(document).ready(function() {

    $("#newOrders").click(function() {'<div class="new-pizza-order">' +
    + '<div class="form-group">'+ 
        '<label for="new-pizza-size">Select Pizza Size:</label>'+
        '<select name="pizza-size" id="pizza-size">'+
            '<option value=" "></option>' +
            '<option value="small">small</option>' +
            '<option value="medium">Medium</option>' +
            '<option value="large">Large</option>' +
        '</select>' +
    '</div>'+
    '<div class="form-group">'+
    '<label for="new-pizza-crust">Select Pizza Crust Type:</label>'+
    '<select name="pizza-crust" id="pizza-crust">'+
    '<option value=" "></option>'+
    '<option value="crispy">crispy</option>' +
    '<option value="thin">Thin</option>' +
    '<option value="stuffed">Stuffed</option>' +
    '<option value="gluten-free">Gluten-Free</option>' +
    '</select>' +
    '</div>' +
    '<div class="form-group">'+
    '<label for="new-pizza-toppings">Select Pizza Toppings:</label>' +
    '<select name="pizza-toppings" id="pizza-toppings">' +
    '<option value=" "></option>' +
    '<option value="Pepperoni">Pepperoni</option>' +
    '<option value="Hawaain">Hawaain</option>' +
    '<option value="bbq-chicken">BBQ Chicken</option>'+
    '<option value="veggie">Vegetable</option>'+
    '</select>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-pizza-size">Select Pizza Size:</label>' +
    '<select name="pizza-size" id="pizza-size">' +
    '<option value=" "></option>' +
    '<option value="small">small</option>' +
    '<option value="medium">Medium</option>' +
    '<option value="large">Large</option>'+
    '</select>' + '</div>'
      });

    $("form#new-order").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName=$("input#new-first-name").val();

        var newContact=new Contact (inputtedFirstName);

        $("new-pizza-order").each(function() {
            var selectedSize=$(this).find("option.pizza-size").val();
            var selectedCrust=$(this).find("option.pizza-crust").val();
            var selectedToppings=$(this).find("option.pizza-toppings").val();

            var newOrder=new Order (selectedSize, selectedCrust, selectedToppings);

            newContact.orders.push(newOrder);
        });

       
        
        $("#orders").last().click(function (){
            $("#show-order").show();
            $("#show-order h3").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".first-name").val()
            $("ul#pizzas").text("");
            let pizzaSize = $("#pizza-size option:selected").val();
            let pizzaCrust= $("#pizza-crust option:selected").val();
            let pizzaToppings= $("#pizza-toppings option:selected").val();
            let totalPrice=0;

            if (pizzaSize=="small" && pizzaCrust=="thin" || pizzaCrust=="crispy" || pizzaCrust=="stuffed" || pizzaCrust=="gluten-free" && pizzaToppings=="Pepperoni") {
                totalPrice=800;
            } else if (pizzaSize=="small" && pizzaCrust=="crispy" && pizzaToppings=="Pepperoni") {
                totalPrice=800; 
            }else if (pizzaSize=="small" && pizzaCrust=="stuffed" && pizzaToppings=="Pepperoni") {
                totalPrice=800;
            }else if (pizzaSize=="small" && pizzaCrust=="gluten-free" && pizzaToppings=="Pepperoni") {
                totalPrice=800;
            } else if (pizzaSize=="small" && pizzaCrust=="thin" && pizzaToppings=="bbq chicken") {
                totalPrice=750;
            } else if (pizzaSize=="small" && pizzaCrust=="crispy" && pizzaToppings=="bbq chicken") {
                totalPrice=750; 
            }else if (pizzaSize=="small" && pizzaCrust=="stuffed" && pizzaToppings=="bbq chicken") {
                totalPrice=750;
            }else if (pizzaSize=="small" && pizzaCrust=="gluten-free" && pizzaToppings=="bbq chicken") {
                totalPrice=750;
            } else if (pizzaSize=="small" && pizzaCrust=="thin" && pizzaToppings=="hawaaian") {
                totalPrice=700;
            } else if (pizzaSize=="small" && pizzaCrust=="crispy" && pizzaToppings=="hawaaian") {
                totalPrice=700; 
            }else if (pizzaSize=="small" && pizzaCrust=="stuffed" && pizzaToppings=="hawaaian") {
                totalPrice=700;
            }else if (pizzaSize=="small" && pizzaCrust=="gluten-free" && pizzaToppings=="hawaaian") {
                totalPrice=700;
            }else if (pizzaSize=="small" && pizzaCrust=="thin" && pizzaToppings=="vegetable") {
                totalPrice=600;
            } else if (pizzaSize=="small" && pizzaCrust=="crispy" && pizzaToppings=="vegetable") {
                totalPrice=600; 
            }else if (pizzaSize=="small" && pizzaCrust=="stuffed" && pizzaToppings=="vegetable") {
                totalPrice=600;
            }else if (pizzaSize=="small" && pizzaCrust=="gluten-free" && pizzaToppings=="vegetable") {
                totalPrice=600;
            } else if (pizzaSize=="small" && pizzaCrust=="thin" && pizzaToppings=="Pepperoni") {
                totalPrice=800;
            } else if (pizzaSize=="small" && pizzaCrust=="crispy" && pizzaToppings=="Pepperoni") {
                totalPrice=800; 
            }else if (pizzaSize=="small" && pizzaCrust=="stuffed" && pizzaToppings=="Pepperoni") {
                totalPrice=800;
            }else if (pizzaSize=="small" && pizzaCrust=="gluten-free" && pizzaToppings=="Pepperoni") {
                totalPrice=800;
            } else if (pizzaSize=="small" && pizzaCrust=="thin" && pizzaToppings=="bbq chicken") {
                totalPrice=750;
            } else if (pizzaSize=="small" && pizzaCrust=="crispy" && pizzaToppings=="bbq chicken") {
                totalPrice=750; 
            }else if (pizzaSize=="small" && pizzaCrust=="stuffed" && pizzaToppings=="bbq chicken") {
                totalPrice=750;
            }else if (pizzaSize=="small" && pizzaCrust=="gluten-free" && pizzaToppings=="Pepperoni") {
                totalPrice=750;
            } else if (pizzaSize=="small" && pizzaCrust=="thin" && pizzaToppings=="hawaaian") {
                totalPrice=700;
            } else if (pizzaSize=="small" && pizzaCrust=="crispy" && pizzaToppings=="hawaaian") {
                totalPrice=700; 
            }else if (pizzaSize=="small" && pizzaCrust=="stuffed" && pizzaToppings=="hawaaian") {
                totalPrice=700;
            }else if (pizzaSize=="small" && pizzaCrust=="gluten-free" && pizzaToppings=="hawaaian") {
                totalPrice=700;
            }else if (pizzaSize=="small" && pizzaCrust=="thin" && pizzaToppings=="vegetable") {
                totalPrice=600;
            } else if (pizzaSize=="small" && pizzaCrust=="crispy" && pizzaToppings=="vegetable") {
                totalPrice=600; 
            }else if (pizzaSize=="small" && pizzaCrust=="stuffed" && pizzaToppings=="vegetable") {
                totalPrice=600;
            }else if (pizzaSize=="small" && pizzaCrust=="gluten-free" && pizzaToppings=="vegetable") {
                totalPrice=600;
            } else if (pizzaSize=="medium" && pizzaCrust=="thin" && pizzaToppings=="Pepperoni") {
                totalPrice=1000;
            } else if (pizzaSize=="medium" && pizzaCrust=="crispy" && pizzaToppings=="Pepperoni") {
                totalPrice=1000; 
            }else if (pizzaSize=="medium" && pizzaCrust=="stuffed" && pizzaToppings=="Pepperoni") {
                totalPrice=1000;
            }else if (pizzaSize=="medium" && pizzaCrust=="gluten-free" && pizzaToppings=="Pepperoni") {
                totalPrice=1000;
            } else if (pizzaSize=="medium" && pizzaCrust=="thin" && pizzaToppings=="bbq chicken") {
                totalPrice=950;
            } else if (pizzaSize=="medium" && pizzaCrust=="crispy" && pizzaToppings=="bbq chicken") {
                totalPrice=950; 
            }else if (pizzaSize=="medium" && pizzaCrust=="stuffed" && pizzaToppings=="bbq chicken") {
                totalPrice=950;
            }else if (pizzaSize=="medium" && pizzaCrust=="gluten-free" && pizzaToppings=="bbq chicken") {
                totalPrice=950;
            } else if (pizzaSize=="medium" && pizzaCrust=="thin" && pizzaToppings=="hawaaian") {
                totalPrice=900;
            } else if (pizzaSize=="medium" && pizzaCrust=="crispy" && pizzaToppings=="hawaaian") {
                totalPrice=900; 
            }else if (pizzaSize=="medium" && pizzaCrust=="stuffed" && pizzaToppings=="hawaaian") {
                totalPrice=900;
            }else if (pizzaSize=="medium" && pizzaCrust=="gluten-free" && pizzaToppings=="hawaaian") {
                totalPrice=900;
            }else if (pizzaSize=="medium" && pizzaCrust=="thin" && pizzaToppings=="vegetable") {
                totalPrice=800;
            } else if (pizzaSize=="medium" && pizzaCrust=="crispy" && pizzaToppings=="vegetable") {
                totalPrice=800; 
            }else if (pizzaSize=="medium" && pizzaCrust=="stuffed" && pizzaToppings=="vegetable") {
                totalPrice=800;
            }else if (pizzaSize=="medium" && pizzaCrust=="gluten-free" && pizzaToppings=="vegetable") {
                totalPrice=800;
            } else if (pizzaSize=="large" && pizzaCrust=="thin" && pizzaToppings=="Pepperoni") {
                totalPrice=1200;
            } else if (pizzaSize=="large" && pizzaCrust=="crispy" && pizzaToppings=="Pepperoni") {
                totalPrice=1200; 
            }else if (pizzaSize=="large" && pizzaCrust=="stuffed" && pizzaToppings=="Pepperoni") {
                totalPrice=1200;
            }else if (pizzaSize=="large" && pizzaCrust=="gluten-free" && pizzaToppings=="Pepperoni") {
                totalPrice=1200;
            } else if (pizzaSize=="large" && pizzaCrust=="thin" && pizzaToppings=="bbq chicken") {
                totalPrice=1150;
            } else if (pizzaSize=="large" && pizzaCrust=="crispy" && pizzaToppings=="bbq chicken") {
                totalPrice=1150; 
            }else if (pizzaSize=="large" && pizzaCrust=="stuffed" && pizzaToppings=="bbq chicken") {
                totalPrice=1150;
            }else if (pizzaSize=="large" && pizzaCrust=="gluten-free" && pizzaToppings=="Pepperoni") {
                totalPrice=1150;
            } else if (pizzaSize=="large" && pizzaCrust=="thin" && pizzaToppings=="hawaaian") {
                totalPrice=1100;
            } else if (pizzaSize=="large" && pizzaCrust=="crispy" && pizzaToppings=="hawaaian") {
                totalPrice=1100; 
            }else if (pizzaSize=="large" && pizzaCrust=="stuffed" && pizzaToppings=="hawaaian") {
                totalPrice=1100;
            }else if (pizzaSize=="large" && pizzaCrust=="gluten-free" && pizzaToppings=="hawaaian") {
                totalPrice=1100;
            }else if (pizzaSize=="large" && pizzaCrust=="thin" && pizzaToppings=="vegetable") {
                totalPrice=1000;
            } else if (pizzaSize=="large" && pizzaCrust=="crispy" && pizzaToppings=="vegetable") {
                totalPrice=1000; 
            }else if (pizzaSize=="large" && pizzaCrust=="stuffed" && pizzaToppings=="vegetable") {
                totalPrice=1000;
            }else if (pizzaSize=="large" && pizzaCrust=="gluten-free" && pizzaToppings=="vegetable") {
                totalPrice=1000;
            }

            var noofpizza=document.getElementById('noofpizza').value;
            $("#pizzas").append(pizzaSize + ", " + pizzaCrust + " " + pizzaToppings);
            $("#singlepizza").html('The price per pizza is: '+totalPrice);
            $("#pprice").html('The total price is: '+ totalPrice*noofpizza);


            // newContact.orders.forEach(function(order) {
            //     $("ul#pizzas").append("li" + pizzaSize + ", " + pizzaCrust + " " + pizzaToppings + "</li>");
            // });
        });

        let name = $("input#new-first-name").val();
        newContact.firstName=name;
        
        
        $("ul#orders").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
    });
    //to show delivery form
    $('#hdeli-btn').click(function(){
        $('#hdeliv').show();
        
    })
    //to hide delivery details
     $('#pick-btn').click(function(){
        $('#hdeliv').hide();
        
    })
});
