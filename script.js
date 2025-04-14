// JavaScript for interactive elements

document.addEventListener("DOMContentLoaded", function () {
    // Form validation with confirmation
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (!name || !email) {
                alert("Please fill in all the fields.");
                event.preventDefault();
            } else {
                const confirmation = confirm("Are you sure you want to submit the form?");
                if (!confirmation) {
                    event.preventDefault();
                }
            }
        });
    }

    // Smooth scrolling to anchors
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Live HTML/CSS/JS Preview
    const htmlInput = document.getElementById('html-code');
    const cssInput = document.getElementById('css-code');
    const jsInput = document.getElementById('js-code');
    const previewFrame = document.getElementById('preview');

    function updatePreview() {
        const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        const htmlContent = htmlInput.value;
        const cssContent = cssInput.value;
        const jsContent = jsInput.value;

        // Build the iframe content dynamically
        iframeDoc.open();
        iframeDoc.write(`
            <html>
            <head>
                <style>${cssContent}</style>
            </head>
            <body>
                ${htmlContent}
                <script>${jsContent}</script>
            </body>
            </html>
        `);
        iframeDoc.close();
    }

    // Update preview on input changes
    htmlInput.addEventListener('input', updatePreview);
    cssInput.addEventListener('input', updatePreview);
    jsInput.addEventListener('input', updatePreview);

    // Progress Bar Update Example
    function updateProgressBar() {
        const sections = document.querySelectorAll('section');
        const progressBar = document.getElementById('progress-bar');
        const totalSections = sections.length;
        let completedSections = 0;

        sections.forEach(section => {
            const sectionRect = section.getBoundingClientRect();
            if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
                completedSections++;
            }
        });

        const progressPercentage = (completedSections / totalSections) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    window.addEventListener('scroll', updateProgressBar);
});
