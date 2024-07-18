function sendMail(contactForm) {
    emailjs.send("service_uajjbzw", "template_75wup1h", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_form_message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}