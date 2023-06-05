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
    const shownElements = Math.floor(document.querySelector('.off__carousel__track-container').offsetWidth / elementWidth);
    let currentIndex = shownElements;

    leftArrow.addEventListener('click', leftArrowClick);
    rightArrow.addEventListener('click', rightArrowClick);

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentIndex * elementWidth}px)`;
    }

    function leftArrowClick() {
        if (currentIndex === 0) currentIndex = brandsLength - 1;
        else currentIndex--;
    
        updateCarousel();
    }

    function rightArrowClick() {
        if (currentIndex === brandsLength - 1) currentIndex = 0;
        else currentIndex++;
    
        updateCarousel();
    }
})();