/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com
=========================================================
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link, .btn-scroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active');
    $('ul.nav').toggleClass('show');
});

// -------------------------
// Looping Typing Placeholder Effect
// -------------------------
function typePlaceholderLoop(elementId, text, speed, delayBetweenLoops = 2000) {
    const input = document.getElementById(elementId);
    let index = 0;
    let isTyping = true;

    function type() {
        if (index <= text.length && isTyping) {
            input.setAttribute('placeholder', text.slice(0, index));
            index++;
            setTimeout(type, speed);
        } else {
            // Pause before clearing and restarting
            isTyping = false;
            setTimeout(() => {
                input.setAttribute('placeholder', '');
                index = 0;
                isTyping = true;
                setTimeout(type, speed);
            }, delayBetweenLoops);
        }
    }

    type();
}

window.addEventListener('DOMContentLoaded', () => {
    typePlaceholderLoop("nameInput", "Your Name", 100);
    setTimeout(() => {
        typePlaceholderLoop("emailInput", "Enter Email", 100);
    }, 1000);
});