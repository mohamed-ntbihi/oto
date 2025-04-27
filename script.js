// menu
let menu = document.querySelector('.menu-icon');
let navbar=document.querySelector('.navbar')

menu.onclik = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

windows.onclik=()=>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};
windows.onscroll=()=>{
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
}

windows.onload=()=>{
    let today=new Date().toISOString().split('T')[0];
    document.getElementById('stard-date').value=today;
    document.getElementById('return-date').value=new date(
        date.now()+7+86400000
    )
    .toISOString()
    .split("T")[0];
};
const animate=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:'2500',
    delay:'400',
});

animate.reveal(".nav");
animate.reveal(".home-img img",{origin:'right'});
animate.reveal(".input-form",{origin:'buttom'});
animate.reveal(".trend-box,.rental-box,.team-box,t-box",{interval:'100'});
