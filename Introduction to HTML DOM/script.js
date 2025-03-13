//function to validate the form
function validateForm(){
    //get the data from the form(name and email)
    var name=document.getElementById("name").value;
    var name = document.getElementById("email").value;
    //access the paragraph to store the error
    var error=document.getElementById("error");
    //check if the name and email is empty
    if(name==""|| email==""){
        error.innerHTML="All feilds are required";
        return false;//prevents the form from submiting itself
    }
    error.innerHTML="";//clears the error message
    alert("Form submitted successfully");//alerts the user that the form has been submitted
    return true;//submits the form
}