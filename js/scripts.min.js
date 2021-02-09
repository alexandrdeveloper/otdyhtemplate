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
	


