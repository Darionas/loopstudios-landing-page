'Use strict';
/* navigation */
const my_links = document.getElementsByClassName('header_navLinks')[0];
const hamburger_menu = document.querySelector('.hamburger_menu');
const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
const show_close_icon = document.getElementsByClassName('show_close_icon')[0];



/* https://stackoverflow.com/questions/4528085/toggle-show-hide-div-with-button*/
hamburger_menu.addEventListener('click', function() {
   let isExpanded = hamburger_menu.getAttribute('aria-expanded');
   isExpanded === 'true' ? isExpanded = 'false' : isExpanded = 'true';
   hamburger_menu.setAttribute('aria-expanded', isExpanded);
})

