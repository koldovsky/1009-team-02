(function tabs(){
    const tabsHeaders = document.querySelectorAll('.off__finds-container__tabs > span');
    const tabs = document.querySelectorAll('.off__finds-container__tab');

    tabsHeaders.forEach(tab => tab.addEventListener('click', tabClick));

    function tabClick() {
        if(this.classList.contains('active')) return;
        
        tabsHeaders.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');

        tabs.forEach(tab => tab.classList.remove('active'));
        const tabId = this.getAttribute('tab');
        document.querySelector(`.off__finds-container__tab[tab=${tabId}]`)
            .classList.add('active');
    }
})();