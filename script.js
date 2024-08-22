let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('dark-mode');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('dark-mode');
    }
};

let menuIcon = document.querySelector('#menu-icon');
let links = document.querySelector('.Links');

menuIcon.onclick = () => {
    links.classList.toggle('open');
};
