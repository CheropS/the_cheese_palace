//business logic 
function Contact(first, last) {
this.firstName = first;
this.lastName=last;
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
        var inputtedLastName=$("input#new-last-name").val();

        var newContact=new Contact (inputtedFirstName, inputtedLastName);

        $("new-pizza-order").each(function() {
            var selectedSize=$(this).find("option.pizza-size").val();
            var selectedCrust=$(this).find("option.pizza-crust").val();
            var selectedToppings=$(this).find("option.pizza-toppings").val();

            var newOrder=new Order (selectedSize, selectedCrust, selectedToppings);
            newContact.orders.push(newOrder);
        })

        $("ul#orders").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
        
        $("#orders").last().click(function (){
            $("#show-order").show();
            $("#show-order h3").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
    });
});

