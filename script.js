// JavaScript for interactive elements

// Example: Confirm when submitting the form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            // Confirm submission
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (!name || !email) {
                alert("Please fill in all the fields.");
                event.preventDefault();  // Prevent form submission if fields are empty
            } else {
                const confirmation = confirm("Are you sure you want to submit the form?");
                if (!confirmation) {
                    event.preventDefault();  // Prevent form submission if user cancels
                }
            }
        });
    }

    // Example: Smooth scroll to anchors
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for any header or margin
                    behavior: "smooth",
                });
            }
        });
    });
});
