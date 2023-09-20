const containerUtama = document.querySelector('.container-utama');
const home = document.querySelector('.navigation .home');
// const homenoneactive = document.querySelector('.navigation .home')
// const home = document.querySelector('.home');
const about = document.querySelector('.navigation .about');
const projects = document.querySelector('.navigation .projects');
const skills = document.querySelector('.navigation .skills');
const contact = document.querySelector('.navigation .contact');
const message = document.querySelector('.message');

home.addEventListener('click', () => {
    containerUtama.classList.remove('aboutactive');
    containerUtama.classList.remove('projectsactive');
    containerUtama.classList.remove('contactactive');
    containerUtama.classList.remove('skillsactive');
    containerUtama.classList.add('homeactive');
});
// homenoneactive.addEventListener('click', () => {
//     containerUtama.classList.add('homenonactive');
// });
about.addEventListener('click', () => {
    containerUtama.classList.remove('homeactive');
    containerUtama.classList.remove('aboutactive');
    containerUtama.classList.remove('projectsactive');
    containerUtama.classList.remove('contactactive');
    containerUtama.classList.remove('skillsactive');
    containerUtama.classList.add('aboutactive');
});
projects.addEventListener('click', () => {
    containerUtama.classList.remove('homeactive');
    containerUtama.classList.remove('aboutactive');
    containerUtama.classList.remove('projectsactive');
    containerUtama.classList.remove('contactactive');
    containerUtama.classList.remove('skillsactive');
    containerUtama.classList.add('projectsactive');
});
skills.addEventListener('click', () => {
    containerUtama.classList.remove('homeactive');
    containerUtama.classList.remove('aboutactive');
    containerUtama.classList.remove('projectsactive');
    containerUtama.classList.remove('contactactive');
    containerUtama.classList.remove('skillsactive');
    containerUtama.classList.add('skillsactive');
});
contact.addEventListener('click', () => {
    containerUtama.classList.remove('homeactive');
    containerUtama.classList.remove('aboutactive');
    containerUtama.classList.remove('projectsactive');
    containerUtama.classList.remove('contactactive');
    containerUtama.classList.remove('skillsactive');
    containerUtama.classList.add('contactactive');
});


// Effects

// const ardi = ScrollReveal ({
//     origin: 'left',
//     distance: '85px',
//     duration: 1500,
//     reset: false
// });

// ardi.reveal('.homeardi', {});
// ardi.reveal('.container-text', {});
