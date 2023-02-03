const btn_mobile = document.getElementById('btn_mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btn_mobile.addEventListener('click', toggleMenu);
