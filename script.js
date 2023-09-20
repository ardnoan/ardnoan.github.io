function slideDown() {
    var elem = document.getElementById("demo");
    elem.style.maxHeight = "100px";
}

const sr = ScrollReveal ({
    origin: 'right',
    distance: '85px',
    duration: 2000,
    reset: false
})

sr.reveal('.text-about', {delay:200});

const rs = ScrollReveal ({
    origin: 'left',
    distance: '85px',
    duration: 1500,
    reset: false
})
rs.reveal('.img-about', {delay:200});
rs.reveal('.kotak', {});
rs.reveal('.title', {});

const luhur = ScrollReveal ({
    origin: 'top',
    distance: '85px',
    duration: 1500,
    reset: false
})
luhur.reveal('.form-container', {});
luhur.reveal('#contact', {});

const hanap = ScrollReveal ({
    origin: 'bottom',
    distance: '85px',
    duration: 1500,
    reset: false
})
hanap.reveal('.contactme', {});
hanap.reveal('.bayangan-text', {});