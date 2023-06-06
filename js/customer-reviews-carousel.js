const slides = [
    `  <article class = "customer__card">
    <img class="customer__card__photo" src="img/judy.jpeg" alt="photo customer Judy">
    <p class="customer__card__name">Judy Peterson</p>
    <p class="customer__card__location">New York</p>
    <p class="customer__card__message">I'm very pleased with our new sofa! It fits perfectly into the interior. The assemblage of the furniture was super fast!</p>
    <p class="customer__card__date">October 28, 2018</p>
</article>`,

    `<article class = "customer__card">
    <img class="customer__card__photo" src="img/kyle.jpeg"  alt="photo customer Kyle">
    <p class="customer__card__name">Kyle Hudson</p>
    <p class="customer__card__location">Houston</p>
    <p class="customer__card__message">Thank you for helping me choose new armchairs in the living room. They look great and fit perfectly into my interior. </p>
    <p class="customer__card__date">June 13, 2019</p>
</article>`,

    ` <article class = "customer__card">
    <img class="customer__card__photo" src="img/hanna.jpeg"  alt="photo customer Hanna">
    <p class="customer__card__name">Hanna Levy</p>
    <p class="customer__card__location">Boston</p>
    <p class="customer__card__message">Next-day delivery surprised me a lot! I thought I would have to wait for weeks! Thank you for the quick processing of my order!</p>
    <p class="customer__card__date">October 04, 2019</p>
</article>`,

    ` <article class = "customer__card">
    <img class="customer__card__photo" src="img/jim.jpeg"  alt="photo customer Jim">
    <p class="customer__card__name">Jim Mockeen</p>
    <p class="customer__card__location">Chicago</p>
    <p class="customer__card__message">I not only found the perfect sofa at a reasonable price but also stylish lamps which were exactly what I wanted. Thank you, SOFA!</p>
    <p class="customer__card__date">January 18, 2020</p>
</article>`,

`<article class = "customer__card">
<img class="customer__card__photo" src="img/karen.jpeg" alt="photo customer Karen">
<p class="customer__card__name">Karen Morning</p>
<p class="customer__card__location">Washington</p>
<p class="customer__card__message">My order arrived really quickly and I was amazed by the quality - PERFECT. I would and have recommended SOFA to others.</p>
<p class="customer__card__date">February 03, 2020</p>
</article>`
];

let currentSlide = 0;

const slideContainer = document.querySelector(`.customer__carousel-slide`);

function showCurrentSlide() {
    slideContainer.innerHTML = slides[currentSlide];
    if (window.innerWidth > 768) {
        const secondSlideIdx = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 1024) {
            const thirdSlideIdx = secondSlideIdx === slides.length - 1 ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

showCurrentSlide();

function nextSlide() {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    showCurrentSlide();
}

setInterval(nextSlide, 5000);

    const nextButton = document.querySelector('.customer__carousel-btn-next');
    const prevButton = document.querySelector('.customer__carousel-btn-prev');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);