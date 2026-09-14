document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("quoteForm");
    const message = document.getElementById("formMessage");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const product = document.getElementById("product").value;
        const details = document.getElementById("message").value.trim();

        if (!name || !phone || !email || !product || !details) {

            message.style.display = "block";

            message.textContent =
                "Please fill in all required fields.";

            return;
        }

        message.style.display = "block";

        message.textContent =
            "Thank you! Your enquiry has been received.";

        form.reset();

    });

});