var typed = new Typed(".text",{
    strings: ["FrontEnd Developer","Undergraduate","Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbxnvZh-rWebTLMrZq_g6F9kvprJDZOwpYXZ6fbNeDn-Fu-naiOj-EmOr-ehQZz44nzZRg/exec'

const form = document.forms['contact-me']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


//Dark mode function js code.............

document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    const portfolioLink = document.getElementById('portfolio-link');
    const modeIcon = document.getElementById('mode-icon');
    const homeElement = document.querySelector('.home');
    const socialIcons = document.querySelectorAll('.home-sci i');
    const aboutHeading = document.querySelector('.about-text h4');
    const aboutParagraph = document.querySelector('.about-text p');
    const projectSection = document.getElementById('project');
    const contactHeading = document.querySelector('.contact-text h4');
    const contactParagraph = document.querySelector('.contact-text p');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('.header');

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);

        // Update the icon based on the current mode
        updateModeIcon(isDarkMode);

        // Update styles for specific elements
        updateElementStyles(isDarkMode);
    }

    // Function to update the mode icon
    function updateModeIcon(isDarkMode) {
        // Toggle between sun and moon icons
        modeIcon.className = isDarkMode ? 'bx bxs-moon' : 'bx bx-sun bx-flip-vertical';

        // Update the color based on the mode
        modeIcon.style.color = isDarkMode ? '#ffffff' : '#000000'; // Change to black for light mode
    }
   // Function to update navigation links color based on the mode
function updateNavLinksColor(isDarkMode) {
    const navLinksColor = isDarkMode ? '#ffffff' : 'black';
    const navLinksHoverColor = isDarkMode ? '#23d2d2' : 'darkblue';

    navLinks.forEach(link => {
        link.style.color = navLinksColor;
        link.style.transition = 'color 0.3s ease';

        // Add hover effect
        link.addEventListener('mouseenter', () => {
            link.style.color = navLinksHoverColor;
        });

        // Remove hover effect
        link.addEventListener('mouseleave', () => {
            link.style.color = navLinksColor;
        });
    });
}
    // Function to update styles for specific elements
    function updateElementStyles(isDarkMode) {

        // Update SVG color based on the mode
    const svgColor = isDarkMode ? '#ffffff' : 'black';

    const svgElements = document.querySelectorAll('.menu-button svg, li:not(.menu-button) svg');

    svgElements.forEach(svg => {
        svg.querySelector('path').style.fill = svgColor;
    });

        // Check if the user has a preference for dark mode in localStorage
        const savedDarkMode = localStorage.getItem('darkMode');

        // Set background image based on the mode
        const backgroundImage = isDarkMode ? 'images/background.jpg' : 'none';
        homeElement.style.backgroundImage = savedDarkMode === 'true' ? `url(${backgroundImage})` : 'none';

        // Set text color based on the mode
        homeElement.style.color = isDarkMode ? '#ffffff' : '#000000';

        // Update social icons color based on the mode
        const socialIconsColor = isDarkMode ? '#ffffff' : '#000000';
        socialIcons.forEach(icon => {
            icon.style.color = socialIconsColor;
        });

        // Update about section text color based on the mode
        const textColor = isDarkMode ? 'aliceblue' : '#000000';
        aboutHeading.style.color = textColor;
        aboutParagraph.style.color = textColor;

        // Update services section color based on the mode
        const projectColor = isDarkMode ? 'aliceblue' : 'black';
        projectSection.style.color = projectColor;

        // Update contact section heading color based on the mode
        const contactHeadingColor = isDarkMode ? 'rgb(66, 237, 237)' : 'darkblue';
        contactHeading.style.color = contactHeadingColor;

        // Update contact section paragraph color based on the mode
        const contactParagraphColor = isDarkMode ? '#ffffff' : 'black';
        contactParagraph.style.color = contactParagraphColor;

        // Update navigation links color and transition based on the mode
        const navLinksColor = isDarkMode ? '#ffffff' : 'black';
        navLinks.forEach(link => {
            link.style.color = navLinksColor;
            link.style.transition = 'color 0.3s ease'; // Add transition effect
        });

        // Update header background color based on the mode
        header.style.background = isDarkMode ? 'rgb(16, 22, 29)' : '#0ef';
    }

    // Check if the user has a preference for dark mode in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode === 'true') {
        // If the preference is set to dark mode, apply dark mode
        document.body.classList.add('dark-mode');
        updateModeIcon(true);
        updateElementStyles(true);
        updateNavLinksColor(true);
    } else {
        // If the preference is not set or set to light mode, default to dark mode
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', true);
        updateModeIcon(true);
        updateElementStyles(true);
        updateNavLinksColor(true);
    }

    // Add click event listener to the mode toggle button
    modeToggle.addEventListener('click', function (event) {
        event.preventDefault();
        toggleDarkMode();

         // After changing the mode, update navigation links color
         const isDarkMode = document.body.classList.contains('dark-mode');
         updateNavLinksColor(isDarkMode);
    });

    // Add click event listener to the Portfolio link
    portfolioLink.addEventListener('click', function (event) {
        event.preventDefault();
        toggleDarkMode();
    });

    // Add event listeners for hover and remove them when the mode changes
    modeToggle.addEventListener('click', function (event) {
        event.preventDefault();
        toggleDarkMode();
        const isDarkMode = document.body.classList.contains('dark-mode');
        updateNavLinksColor(isDarkMode);
    });
});






