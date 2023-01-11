'Use strict';
/* navigation */
/* https://xane514.medium.com/aria-controls-for-creating-a-mobile-navbar-6001012153a0 */
const hamburger_menu = document.querySelector('.hamburger_menu');
hamburger_menu.addEventListener('click', function() {
   let isExpanded = hamburger_menu.getAttribute('aria-expanded');
   isExpanded === 'true' ? isExpanded = 'false' : isExpanded = 'true';
   hamburger_menu.setAttribute('aria-expanded', isExpanded);
})

