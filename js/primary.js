var toggleMenu = document.getElementById('toggleMenu');
var nav = document.querySelector('nav');
toggleMenu.addEventListener(
    'click',
    function () {
        if (nav.style.display == 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    }
);