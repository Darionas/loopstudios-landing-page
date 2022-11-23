'Use strict'

    const my_links = document.getElementsByClassName('myLinks')[0];
    const logo_container = document.getElementsByClassName('logo_container')[0];
    const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
    const close_icon = document.getElementsByClassName('close_icon')[0];
    const links_collection = document.getElementsByClassName('myLinks')[0].children;
    
/*----upper case of navigation-----*/    
    for(let i = 0; i < links_collection.length; i++) {
       const all_links = links_collection[i];
       all_links.style.textTransform = 'uppercase';
    }

/*-----toggle hamburger icon------*/
function toggle_hamburger() {
    if(my_links.style.display === 'block') {
        my_links.style.display = 'none';
        logo_container.style.backgroundColor = 'transparent';
        hamburger_icon.style.display = 'block';
        close_icon.style.display = 'none';
    } else {
        my_links.style.display = 'block';
        my_links.style.backgroundColor = 'hsl(0, 0%, 0%)';
        logo_container.style.backgroundColor = 'hsl(0, 0%, 0%)';
        hamburger_icon.style.display = 'none';
        close_icon.style.display = 'block';
    }
}

