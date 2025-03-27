document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let inputField = document.getElementById("numberInput");
    let errorMessage = document.getElementById("error-message");
    let successMessage = document.getElementById("success-message");
    let number = inputField.value.trim();
    try {
        if (number === "") {
            throw "Input cannot be empty!";
        }
        if (isNaN(number)) {
            throw "Please enter a valid number!";
        }
        //If no error, show success message
        successMessage.textContent = "Valid number entered: "+ number;
        successMessage.classList.remove("d-none");
        errorMessage.classList.add("d-none");
    } catch (error) {
        errorMessage.textContent = error;
        errorMessage.classList.remove("d-none");
        successMessage.classList.add("d-none");
    }
});