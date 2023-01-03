'Use strict';
/* navigation */
const my_links = document.getElementsByClassName('header_navLinks')[0];
const hamburger_menu = document.getElementsByClassName('hamburger_menu')[0];
const hamburger_icon = document.getElementsByClassName('hamburger_icon')[0];
const show_close_icon = document.getElementsByClassName('show_close_icon')[0];

/* images and images titles */
const earth = document.getElementsByClassName('earth')[0];
const earth_title = document.getElementsByClassName('earth_title')[0];
const arcade = document.getElementsByClassName('arcade')[0];
const arcade_title = document.getElementsByClassName('arcade_title')[0];
const soccer = document.getElementsByClassName('soccer')[0];
const soccer_title = document.getElementsByClassName('soccer_title')[0];
const race_car = document.getElementsByClassName('race_car')[0];
const race_title = document.getElementsByClassName('race_title')[0];
const landscape_photo = document.getElementsByClassName('landscape_photo')[0];
const landscape_title = document.getElementsByClassName('landscape_title')[0];
const sky = document.getElementsByClassName('sky')[0];
const nightSky_title = document.getElementsByClassName('nightSky_title')[0];
const mars_car = document.getElementsByClassName('mars_car')[0];
const curiosity_title = document.getElementsByClassName('curiosity_title')[0];
const fisheye_photo = document.getElementsByClassName('fisheye_photo')[0];
const fisheye_title = document.getElementsByClassName('fisheye_title')[0];


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

/*-----toggle hamburger icon------*/
/*---click hamburger-----*/
/*hamburger_icon.addEventListener('click', click_hamburger);
function click_hamburger() {
    if(my_links.style.display === 'grid') {
        my_links.style.display = 'none';
        close_icon.style.display = 'none';
        hamburger_icon.style.display = 'block';
    } else {
        my_links.style.display = 'grid';
        my_links.style.backgroundColor = 'hsl(0, 0%, 0%)';
        logo_container.style.backgroundColor = 'hsl(0, 0%, 0%)';
        hamburger_container.style.backgroundColor = 'hsl(0, 0%, 0%)';
        hamburger_icon.style.display = 'none';
        close_icon.style.display = 'block';
    }
}*/

/*------click cloce icon------*/
/*close_icon.addEventListener('click', click_close_icon);
function click_close_icon() {
   if(my_links.style.display === 'grid') {
      my_links.style.display = 'none';
      logo_container.style.backgroundColor = 'transparent';
      hamburger_container.style.backgroundColor = 'transparent';
      hamburger_icon.style.display = 'block';
      close_icon.style.display = 'none';
   } else {
      return;
   }
}*/

/* Changing images titles text color */
/*
earth.addEventListener('mouseover', () => {
    earth_title.style.color = 'black';
});
earth.addEventListener('mouseleave', () => {
    earth_title.style.color = 'white';
});


arcade.addEventListener('mouseover', () => {
    arcade_title.style.color = 'black';
});
arcade.addEventListener('mouseleave', () => {
    arcade_title.style.color = 'white';
});


soccer.addEventListener('mouseover', () => {
    soccer_title.style.color = 'black';
});
soccer.addEventListener('mouseleave', () => {
    soccer_title.style.color = 'white';
});


race_car.addEventListener('mouseover', () => {
    race_title.style.color = 'black';
});
race_car.addEventListener('mouseleave', () => {
    race_title.style.color = 'white';
});


landscape_photo.addEventListener('mouseover', () => {
    landscape_title.style.color = 'black';
});
landscape_photo.addEventListener('mouseleave', () => {
    landscape_title.style.color = 'white';
});


sky.addEventListener('mouseover', () => {
    nightSky_title.style.color = 'black';
});
sky.addEventListener('mouseleave', () => {
    nightSky_title.style.color = 'white';
});


mars_car.addEventListener('mouseover', () => {
    curiosity_title.style.color = 'black';
});
mars_car.addEventListener('mouseleave', () => {
    curiosity_title.style.color = 'white';
});


fisheye_photo.addEventListener('mouseover', () => {
    fisheye_title.style.color = 'black';
});
fisheye_photo.addEventListener('mouseleave', () => {
    fisheye_title.style.color = 'white';
});
*/