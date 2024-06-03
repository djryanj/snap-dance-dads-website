// Script to hide/show menu
window.addEventListener("load", function() {
    var buttons = document.querySelectorAll('#about_chevron, #schedule_chevron');
    // var menus = document.querySelector('ul.sub-menu');
    for (let i = 0; i < buttons.length; i++) {
        var menuName = buttons[i].id.split("_")[0] // e.g., schedule
        var selector = "#" + menuName + "-menu"
        var menu = document.querySelector(selector)
        buttons[i].addEventListener('click', function (event) {
            if (menu.classList.contains('dn')) {
                menu.classList.remove('dn');
                buttons[i].setAttribute("aria-expanded", "true");
            } else {
                menu.classList.add('dn');
                buttons[i].setAttribute("aria-expanded", "false");
            }
        }
    );
    }      
})