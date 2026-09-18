const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.51,
    rootMargin: "30px"
});

// hero
const heroTitle = document.querySelector("#hero h1");
const heroP = document.querySelector("#hero p");
const heroBtn = document.querySelector("#hero button")

observer.observe(heroTitle);
observer.observe(heroP);
observer.observe(heroBtn);

// beneficios
const benefTitle = document.querySelector("#beneficios h1");
const benefBox1 = document.querySelector("#beneficios #box-1");
const benefBox2 = document.querySelector("#beneficios #box-2");
const benefBox3 = document.querySelector("#beneficios #box-3");
const benefBox4 = document.querySelector("#beneficios #box-4");
const benefBox5 = document.querySelector("#beneficios #box-5");

observer.observe(benefTitle);
observer.observe(benefBox1);
observer.observe(benefBox2);
observer.observe(benefBox3);
observer.observe(benefBox4);
observer.observe(benefBox5);

// quem somos
const equipeTitle = document.querySelector("#quem-somos h1");
const greetingCard = document.querySelector("#quem-somos .greeting-card");
const equipeCards = document.querySelectorAll("#quem-somos .card");

const contatoAll = document.querySelector("#contato");
observer.observe(contatoAll);


observer.observe(equipeTitle);
observer.observe(greetingCard);
equipeCards.forEach((card) => {
    observer.observe(card);
})

/*
// scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.8,
    rootMargin: "30px"
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    root: document.querySelector('.timeline-container'), // scroll container as root
    threshold: 0.5,
    rootMargin: "30px"
});

const headerLinks = document.querySelectorAll("header a");
const avrilTxt = document.querySelector("#name span:nth-of-type(1)");
const lavigneTxt = document.querySelector("#name span:nth-of-type(2)");
const ppp = document.querySelector("#ppp");
const paragraph = document.querySelector("#paragraph");
const avrilHero = document.querySelector("#avril-hero");
const splasHero = document.querySelector("#splash-hero");
const storyTitle = document.querySelector("#story-title");
const born = document.querySelector("#born");
const family = document.querySelector("#family");
const napanee = document.querySelector("#napanee");
const school = document.querySelector("#school");
const opportunity = document.querySelector("#opportunity");
const achievementsTitle = document.querySelector("#achievements-title");
const timelineItems = document.querySelectorAll(".timeline-track .info-container");
const songCards = document.querySelectorAll(".carousel div");
const songsTitle = document.querySelector("#songs > p");

timelineItems.forEach((item) => {
    observer2.observe(item);
});

headerLinks.forEach((card) => {
    observer.observe(card);
}); 

observer.observe(avrilTxt);

observer.observe(lavigneTxt);

observer.observe(ppp);

observer.observe(paragraph);

observer.observe(avrilHero);

observer.observe(splasHero);

observer.observe(storyTitle);

observer.observe(born);

observer.observe(family);

observer.observe(napanee);

observer.observe(school);

observer.observe(opportunity);

observer.observe(achievementsTitle);

songCards.forEach((card) => {
    observer.observe(card);
}); 

observer.observe(songsTitle);

const firstThreeItems = document.querySelectorAll(".timeline-track .info-container:nth-child(-n+3)");

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.5
    // no root specified = viewport, same as your `observer` for hero/story elements
});

firstThreeItems.forEach((item) => {
        observer3.observe(item);
}); 
*/