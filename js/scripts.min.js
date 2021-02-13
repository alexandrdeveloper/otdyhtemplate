document.addEventListener("DOMContentLoaded", function() {
	
/* Home Page Scripts */ 
    



    for (const dropdown of document.querySelectorAll(".b-select-group")) {
        dropdown.addEventListener('click', function() {
            this.querySelector('.custom-select').classList.toggle('custom-select_open');
        });
        for (const option of document.querySelectorAll(".custom-options__item")) {
            option.addEventListener('click', function() {
                if (!this.classList.contains('custom-options__item_selected')) {
                    this.parentNode.querySelector('.custom-options__item_selected').classList.remove('custom-options__item_selected');
                    this.classList.add('custom-options__item_selected');
                    this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
                }
            })
        }
    }

    window.addEventListener('click', function(e) {
        for (const select of document.querySelectorAll('.custom-select')) {
            if (!select.contains(e.target)) {
                select.classList.remove('custom-select_open');
            }
        }
    });

    let tabToggle = document.querySelectorAll('.b-tab-filter__toggle');
    let tabContent = document.querySelectorAll('.b-tab-filter__item');
    let heroBg = document.querySelectorAll('.b-hero-bg__item');
    let heroContent = document.querySelectorAll('.b-hero__content');

    for (let i = 0; i<tabToggle.length; i++) {
        tabToggle[i].addEventListener('click', function(e) {
            e.preventDefault();
            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove('b-tab-filter__item_active');
            }
            for (let i = 0; i < tabToggle.length; i++) {
                tabToggle[i].classList.remove('b-tab-filter__toggle_active');
            }
            for (let i = 0; i < heroBg.length; i++) {
                heroBg[i].classList.remove('b-hero-bg__item_visible');
            }
            for (let i = 0; i < heroContent.length; i++) {
                heroContent[i].classList.remove('b-hero__content_visible');
            }
            let activeTabContentId = this.dataset.id;
            let activeHeroBg = this.dataset.bg;
            let activeHeroContent = this.dataset.hero;
            document.getElementById(activeTabContentId).classList.add('b-tab-filter__item_active');
            document.getElementById(activeHeroBg).classList.add('b-hero-bg__item_visible');
            document.getElementById(activeHeroContent).classList.add('b-hero__content_visible');
            this.classList.add('b-tab-filter__toggle_active');
        });
    }

   
    
  

    
/* Objects Page Scripts */ 
    for (const modalToggle of document.querySelectorAll(".modal-toggle")) {
        modalToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.b-modal').classList.toggle('b-modal_visible');
            document.querySelector('body').classList.toggle('no-scroll');

        })
    }
    for (const modalToggle of document.querySelectorAll(".b-modal-close")) {
        modalToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.b-modal').classList.remove('b-modal_visible');
            document.querySelector('body').classList.remove('no-scroll');
        })
    }

   window.addEventListener('click', function(e) {
        for (const popupWindow of document.querySelectorAll('.b-modal-window')) {
            if (!popup.contains(e.target) && document.querySelector('.b-modal').classList.contains('b-modal_visible')) {
                document.querySelector('.b-modal').classList.remove('b-modal_visible');
            }
        }
    })

    for (const sideNavToggle of document.querySelectorAll(".b-sidenav-toggle")) {
        sideNavToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.b-sidenav').classList.toggle('b-sidenav_opened');
            document.querySelector('body').classList.toggle('no-scroll');

        })
    }
    
    

});
	


