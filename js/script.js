//business logic 
function Contact(first, last) {
this.firstName = first;
this.lastName=last;
}

//user interface logic 
$(document).ready(function() {
    $("form#new-order").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName=$("input#new-first-name").val();
        var inputtedLastName=$("input#new-last-name").val();

        var newContact=new Contact (inputtedFirstName, inputtedLastName);

        $("ul#orders").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
        $(".order").last().click(function (){
            $("#show-order").show();
            $("#show-order h3").text(newContact.firstName);
            $(".first-name").text(newContact.lastName);
        });

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
    });
});

