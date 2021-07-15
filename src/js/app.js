document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    darkMode();
});


function darkMode() {
    const preferenciaDarkMode = window.matchMedia(('prefers-color-scheme: dark'));
    //console.log(preferenciaDarkMode.matches);

    if(preferenciaDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else{
        document.body.classList.remove('dark-mode');
    }

    preferenciaDarkMode.addEventListener('change', () => {
        if(preferenciaDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else{
            document.body.classList.remove('dark-mode');
        }
    })
;  
    const btnDarkMode = document.querySelector('.dark-mode-boton');
    btnDarkMode.addEventListener('click', cambiarColor);
    function cambiarColor() {
        document.body.classList.toggle('dark-mode') // Toogle agrega la clase si no la tiene y la quita si la tiene
    }
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu')

    mobileMenu.addEventListener('click', navegacionResponsive);
}


function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar');
}

