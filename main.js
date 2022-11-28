'Use strict'

    const my_links = document.getElementsByClassName('header_navLinks')[0];
    const logo_container = document.getElementsByClassName('header_logo_container')[0];
    const hamburger_container = document.getElementsByClassName('hamburger_container')[0];
    const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
    const close_icon = document.getElementsByClassName('close_icon')[0];
    const links_collection = document.getElementsByClassName('header_navLinks')[0].children;

/*-----toggle hamburger icon------*/
/*---click hamburger-----*/
hamburger_icon.addEventListener('click', click_hamburger);
function click_hamburger() {
    /*----upper case of navigation-----*/    
    for(let i = 0; i < links_collection.length; i++) {
        const all_links = links_collection[i];
        all_links.style.textTransform = 'uppercase';
     }

    if(my_links.style.display === 'grid') {
        my_links.style.display = 'none';
        hamburger_icon.style.display = 'block';
        close_icon.style.display = 'none';
    } else {
        my_links.style.display = 'grid';
        my_links.style.backgroundColor = 'hsl(0, 0%, 0%)';
        logo_container.style.backgroundColor = 'hsl(0, 0%, 0%)';
        hamburger_container.style.backgroundColor = 'hsl(0, 0%, 0%)';
        hamburger_icon.style.display = 'none';
        close_icon.style.display = 'block';
    }
}

/*------click cloce icon------*/

close_icon.addEventListener('click', click_close_icon);
function click_close_icon() {
   if(my_links.style.display === 'grid') {
      my_links.style.display = 'none'
      logo_container.style.backgroundColor = 'transparent';
      hamburger_container.style.backgroundColor = 'transparent';
      hamburger_icon.style.display = 'block';
      close_icon.style.display = 'none';
   } else {
      return;
   }
}
