window.addEventListener("load", () => {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
        } else {
            event.preventDefault(); // prevent actual submission
            alert("Form submitted successfully!");
            form.reset();
            form.classList.remove("was-validated");
        }
        form.classList.add("was-validated")
    });
});