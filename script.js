// JavaScript file (portfolio.js)

// Function to handle contact form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Construct object from form data
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Example: Log form data to console
    console.log("Form Data:", formDataObject);

    // Example: You can send the form data to a server using AJAX/fetch
    // Replace the URL with your backend endpoint
    // fetch("YOUR_BACKEND_ENDPOINT", {
    //     method: "POST",
    //     body: JSON.stringify(formDataObject),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // .then(response => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw new Error("Network response was not ok.");
    // })
    // .then(data => {
    //     console.log("Server Response:", data);
    //     alert("Your message has been sent!");
    // })
    // .catch(error => {
    //     console.error("Error:", error);
    //     alert("An error occurred. Please try again later.");
    // });

    // Example: Display a confirmation message
    alert("Your message has been sent!");

    // Reset form
    event.target.reset();
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);
