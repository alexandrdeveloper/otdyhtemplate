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

    
    for (const button of document.querySelectorAll('.content-filter-controls__arrow_right')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var container = document.querySelector('.content-filter__list');
            sideScroll(container,'right',25,100,10);
        })
    }


    for (const back of document.querySelectorAll('.content-filter-controls__arrow_left')) {
        back.addEventListener('click', function(e) {
            e.preventDefault();
            var container = document.querySelector('.content-filter__list');
            sideScroll(container,'left',25,100,10);
        })
    }

    

    function sideScroll(element,direction,speed,distance,step){
        scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    for (const distance of document.querySelectorAll('.distance-toggle')) {
        distance.addEventListener('click', function(e) {
            e.preventDefault();
            let distanceList = this.parentNode.querySelector('.b-catalog__distance');

            distanceList.classList.toggle('b-catalog__distance_open');
        })
    }
    
});
        
    
    
    