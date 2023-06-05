(function tabs() {
    const tabsHeaders = document.querySelectorAll('.off__finds-container__tabs > span');
    const tabs = document.querySelectorAll('.off__finds-container__tab');

    tabsHeaders.forEach(tab => tab.addEventListener('click', tabClick));

    function tabClick() {
        if (this.classList.contains('active')) return;

        tabsHeaders.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');

        tabs.forEach(tab => tab.classList.remove('active'));
        const tabId = this.getAttribute('tab');
        document.querySelector(`.off__finds-container__tab[tab=${tabId}]`)
            .classList.add('active');
    }
})();

(function carousel() {
    const leftArrow = document.querySelector('.off__carousel__track-container__left-arrow');
    const rightArrow = document.querySelector('.off__carousel__track-container__right-arrow');
    const brandsLength = document.querySelectorAll('.off__carousel__slide').length;
    const carouselTrack = document.querySelector('.off__carousel__track');
    const elementWidth = 125 + 84;
    let currentIndex = 0;
    let visibleBrands = 1;

    leftArrow.addEventListener('click', leftArrowClick);
    rightArrow.addEventListener('click', rightArrowClick);

    setCardsSettings();
    window.addEventListener("resize", setCardsSettings, true);

    function setCardsSettings() {
        if (window.innerWidth > 1024) visibleBrands = 4;
        else if (window.innerWidth > 540) visibleBrands = 2;
        else visibleBrands = 1;

        //cardWidth = 100 / visibleBrands;
        currentIndex = 0;
        updateCarousel();
    }

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentIndex * elementWidth}px)`;
    }

    function leftArrowClick() {
        if (currentIndex === 0) currentIndex = brandsLength - visibleBrands;
        else currentIndex = currentIndex - visibleBrands >= 0 ? currentIndex - visibleBrands : 0;

        updateCarousel();
    }

    function rightArrowClick() {
        if (currentIndex + visibleBrands >= brandsLength) currentIndex = 0;
        else currentIndex += visibleBrands;

        updateCarousel();
    }
})();