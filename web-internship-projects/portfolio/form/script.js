document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Error / success message
    let error = document.getElementById("error");

    // Validation
    if (name === "" || email === "" || phone === "" || message === "") {

        error.innerHTML = "❌ Please fill all fields";

    } else {

        error.innerHTML =
        "✅ Form Submitted Successfully <br><br>" +
        "<b>Name:</b> " + name + "<br>" +
        "<b>Email:</b> " + email + "<br>" +
        "<b>Phone:</b> " + phone + "<br>" +
        "<b>Message:</b> " + message;

    }

});