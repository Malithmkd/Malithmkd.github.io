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


  document.getElementById('theme-toggle').addEventListener('click', function() {
    // Get the link elements
    var themeStyle = document.getElementById('theme-style');
    var darkThemeStyle = document.getElementById('dark-theme-style');

    // Toggle the 'disabled' attribute to switch between themes
    themeStyle.toggleAttribute('disabled');
    darkThemeStyle.toggleAttribute('disabled');
  });
