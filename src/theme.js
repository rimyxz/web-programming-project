function retrieve_theme() {
  var theme = localStorage.getItem('website_theme');

  // Apply dark mode if it was previously selected
  if (theme == 'dark_mode') {
    document.body.classList.add('dark_mode');
  } else {
    // Use light mode if dark mode was not selected
    document.body.classList.remove('dark_mode');
  }
}

function setup_theme_button() {
  // Find the theme button in the HTML
  let theme_toggler = document.querySelector('#theme_toggler');

  // Wait if the button has not been created yet
  if (theme_toggler == null) {
    setTimeout(setup_theme_button, 100);
    return;
  }

  // Change the theme when the button is clicked
  theme_toggler.addEventListener('click', function () {
    // Switch between light mode and dark mode
    document.body.classList.toggle('dark_mode');

    // Save the selected theme in localStorage
    if (document.body.classList.contains('dark_mode')) {
      localStorage.setItem('website_theme', 'dark_mode');
    } else {
      localStorage.setItem('website_theme', 'default');
    }
  });
}

retrieve_theme();
setup_theme_button();