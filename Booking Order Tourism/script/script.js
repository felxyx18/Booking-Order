$(document).on("pagecreate", function() {

    // --- 1. Contact Form Validation ---
    $("#contactForm").on("submit", function(e) {
        e.preventDefault(); 
        
        var name = $("#cName").val().trim();
        var email = $("#cEmail").val().trim();
        var message = $("#cMsg").val().trim();
        var consent = $("#cConsent").is(":checked");
        var errorBox = $("#errorBox");

        if (name === "" || email === "" || message === "") {
            errorBox.text("Error: All fields (Name, Email, Message) are required.").show();
        } else if (!consent) {
            errorBox.text("Error: You must check the ethical consent box to proceed.").show();
        } else {
            errorBox.hide();
            alert("Thank you, " + name + "! Your message has been sent successfully.");
            $(this)[0].reset();
        }
    });

    // --- 2. Booking Form Submission ---
    $("#bookingForm").on("submit", function(e) {
        e.preventDefault();
        
        var name = $("#bName").val();
        var phone = $("#bPhone").val();
        var email = $("#bEmail").val();
        
        if (name === "" || phone === "" || email === "") {
            alert("Please fill in all booking details.");
        } else {
            alert("Thank you, " + name + "! Your order has been placed successfully.");
            this.reset();
            $.mobile.changePage("#home");
        }
    });

});

$(document).on("pagecreate", function() {
    
    $("#bookingForm").on("submit", function(e) {
        // This stops the browser from trying to load a new page
        e.preventDefault(); 
        
        var name = $("#bName").val();
        
        // Your custom message
        alert("Thank you, " + name + "! Your order has been placed successfully.");
        
        // Reset the form
        this.reset();
        
        // Optional: Refresh the select menu if you are using jQuery Mobile
        $("#bPackage").selectmenu("refresh");
    });
});

// Example: Triggering the popup via JS
$("#bookingForm").on("submit", function(e) {
    e.preventDefault();
    // Logic for saving data here...
    
    // Open the popup
    $("#popupConfirm").popup("open");
});
