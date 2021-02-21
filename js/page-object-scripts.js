document.addEventListener("DOMContentLoaded", function() {  
    
        
    for (const menuToggle of document.querySelectorAll(".menu-toggle")) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.b-header').classList.toggle('b-header_open');
            this.classList.toggle('menu-toggle_active');
            document.querySelector('.b-page__wrapper').classList.toggle('b-page__wrapper_shadow');
        });
    }

    for (const searchToggle of document.querySelectorAll(".search-toggle")) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.b-search').classList.toggle('b-search_visible');
            this.classList.toggle('search-toggle_active');
            
        });
    }
    
    // Object Page Navbar Scrolling to section  *** BEGIN
        function smoothScroll(targ, duration) {
            let target = document.querySelector(targ);
            let targetPosition = target.getBoundingClientRect().top + window.scrollY - 100; 
            let startPosition = window.pageYOffset;
            let distance = targetPosition - startPosition;
            let startTime = null;
    
            function animationScroll(currentTime){
                if (startTime === null) startTime = currentTime;
                let timeElapsed = currentTime - startTime;
                let run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animationScroll);
            }
    
            function easeInOutQuart(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t*t + b;
                t -= 2;
                return -c/2 * (t*t*t*t - 2) + b;
            };
    
            requestAnimationFrame(animationScroll);
            
        }
    
        let objectNavItem = document.querySelectorAll('.p-object-nav__item');
        for (i = 0; i < objectNavItem.length; i++) {
            objectNavItem[i].addEventListener('click', function(e) {
                e.preventDefault();            
                let anchorTarget = this.getAttribute('href');
                smoothScroll(anchorTarget, 1000);           
                
            });
        }    
    
        
    
    // Object Page Navbar Scrolling to section  *** END
    
    /** Object Page Navbar Swich Begin **/
    
        const links = document.querySelectorAll('.p-object-nav__item');
        const sections = document.querySelectorAll('.navbar-switch');
        const stickyNav = document.querySelector('.b-object-navbar');
    
        function changeLinkState() {
        let index = sections.length;
        let stickyNavH = stickyNav.offsetHeight;
        let changeDistance = stickyNavH + 50;
    
        while(--index && window.scrollY + changeDistance < sections[index].offsetTop) {}
        
        links.forEach((link) => link.classList.remove('p-object-nav__item_active'));
        links[index].classList.add('p-object-nav__item_active');
        }
    
        changeLinkState();
        window.addEventListener('scroll', changeLinkState);
    
    
    /** Object Page Navbar Swich End **/
    
    /** Object Page Mobile Slider **/
        let arrowLeft = document.querySelector('.gallery-controls__item_prev');
        let arrowRight = document.querySelector('.gallery-controls__item_next');
    
        if (window.innerWidth < 768) {
            var gallerySlider = tns({
                container: '.b-gallery__grid',
                items: 1,
                slideBy: 'page',
                autoplay: true,
                nav: false,
                edgePadding: 22,            
                center: true, 
                prevButton: arrowLeft,
                nextButton: arrowRight,         
                responsive: {
                    420: {
                        fixedWidth: 340,
                    },
                    768: {
                        disable: true,
                    }
                }
            });
        }    
    
       
    
        for (const modalToggle of document.querySelectorAll(".modal-toggle")) {
            modalToggle.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.b-modal').classList.toggle('b-modal_visible');
                document.querySelector('body').classList.toggle('no-scroll');
    
            })
        }
        for (const modalClose of document.querySelectorAll(".b-modal-close")) {
            modalClose.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.b-modal').classList.remove('b-modal_visible');
                document.querySelector('body').classList.remove('no-scroll');
            })
        }
    
       /*window.addEventListener('click', function(e) {  
           
            for (const popupWindow of document.querySelectorAll('.b-modal-window')) {
                if (!popupWindow.contains(e.target) && document.querySelectorAll('.b-modal').classList.match('b-modal_visible')) {
                    document.querySelector('.b-modal').classList.remove('b-modal_visible');
                }
            }         
            
        })*/
        function sideNavHide() {
            document.querySelector('.b-sidenav').classList.remove('b-sidenav_opened');
            document.querySelector('body').classList.remove('no-scroll');
        }
        function sideNavShow() {
            document.querySelector('.b-sidenav').classList.toggle('b-sidenav_opened');
            document.querySelector('body').classList.toggle('no-scroll');
        }
    
        for (const sideNavToggle of document.querySelectorAll(".b-sidenav-toggle")) {
            sideNavToggle.addEventListener('click', function(e) {
                e.preventDefault();
                sideNavShow();
            })
        }    
    
        for (const sideNavClose of document.querySelectorAll(".b-sidebar__close")) {
            sideNavClose.addEventListener('click', function(e) {
                e.preventDefault();
                sideNavHide();
            })
        }
        window.addEventListener('click', function(e) {
            for (const sideNavWindow of document.querySelectorAll('.b-sidenav')) {
                if (!sideNavWindow.contains(e.target)) {
                    sideNavHide();
                }
            }
        })
    
    
        
    
        
        for (const objectImages of document.querySelectorAll('.b-gallery__item img')){
            objectImages.addEventListener('click', function(e){
                e.preventDefault();
                yalb(objectImages);
            });
        }
    
        const objectNav = document.querySelector('.b-object-navbar');
        const objectNavList = document.querySelector('.p-object-nav');
        const objectNavTop = objectNavList.offsetTop;
        const bMain = document.querySelector('.b-main');
    
        function fixNav() {
    
            if (window.scrollY >= objectNavTop) {
                objectNav.classList.add('b-object-navbar_sticky');
                bMain.style.marginTop = objectNav.offsetHeight + 'px';
            } else {
                bMain.style.marginTop = 0;
                objectNav.classList.remove('b-object-navbar_sticky');
            }
        }
    
        window.addEventListener('scroll', fixNav);
});