// const script = document.createElement('script')

// script.setAttribute('src', 'https://unpkg.com/scrollreveal')

// document.body.insertAdjacentElement("afterbegin", script)

const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
});

ScrollReveal().reveal("#conteudo", { delay: 100 });
ScrollReveal().reveal(".date", { delay: 300 });
ScrollReveal().reveal("#icon", { delay: 300 });
ScrollReveal().reveal(".title", { delay: 400 });
ScrollReveal().reveal(".description", { delay: 500 });
ScrollReveal().reveal(".font", { delay: 600 });