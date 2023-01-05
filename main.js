'Use strict';
/* navigation */
const my_links = document.getElementsByClassName('header_navLinks')[0];
const hamburger_menu = document.getElementsByClassName('hamburger_menu')[0];
const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
const show_close_icon = document.getElementsByClassName('show_close_icon')[0];



/* https://stackoverflow.com/questions/4528085/toggle-show-hide-div-with-button*/
hamburger_menu.addEventListener('click', function() {
    if('[aria-expanded="false"]') {
        hamburger_icon.classList.toggle('hamburger_icon');
        show_close_icon.classList.toggle('close_icon');
    }
    if('[aria-expanded="true"]') {
        my_links.classList.toggle('header_navLinks');
    }
})

