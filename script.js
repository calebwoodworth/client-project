// script.js for adding functionality (e.g., form validation or interactivity)

// Example: Simple alert when form is submitted
document.querySelector('form').addEventListener('submit', function(event) {
    alert('Form submitted successfully!');
});

// Show a welcome alert when the page loads
window.onload = function() {
    alert("Welcome to Connor's HTML Learning Site!");
};

// Function to change background color randomly
function changeBackground() {
    const colors = ["#f4f4f4", "#e0f7fa", "#ffecb3", "#f8bbd0", "#c8e6c9"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function toggleInfo() {
    const infoSection = document.getElementById("pageInfo");
    const toggleButton = document.getElementById("toggleButton");

    if (infoSection.style.display === "none") {
        infoSection.style.display = "block";
        toggleButton.textContent = "Hide Page Information";
    } else {
        infoSection.style.display = "none";
        toggleButton.textContent = "Show Page Information";
    }
}

function filterTags() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const tagsList = document.getElementById('tagsList');
    const tags = tagsList.getElementsByTagName('li');

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const tagName = tag.textContent || tag.innerText;
        if (tagName.toLowerCase().includes(searchInput)) {
            tag.style.display = '';
        } else {
            tag.style.display = 'none';
        }
    }
}