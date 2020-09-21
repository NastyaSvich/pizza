(function ($) {
        "use strict";
        // DROPDOWN MENU
        var winWidth = $(window).width();
        dropdownMenu(winWidth);
        $(window).on('resize', function () {
                winWidth = $(window).width();
                dropdownMenu(winWidth);
        });

        $('[data-menu]').on('click', function () {
                var mainMenu = $(this).data('menu');
                $(mainMenu).toggleClass('visible-menu');
        });
})(jQuery);

function dropdownMenu(winWidth) {
        if (winWidth > 767) {
                $('.main-menu li.drop-down').on('mouseover', function () {
                        var $this = $(this),
                                menuAnchor = $this.children('a');
                        menuAnchor.addClass('mouseover');
                }).on('mouseleave', function () {
                        var $this = $(this),
                                menuAnchor = $this.children('a');
                        menuAnchor.removeClass('mouseover');
                });
        } else {
                $('.main-menu li.drop-down > a').on('click', function () {
                        if ($(this).attr('href') == '#') return false;
                        if ($(this).hasClass('mouseover')) {
                                $(this).removeClass('mouseover');
                        }
                        else {
                                $(this).addClass('mouseover');
                        }
                        return false;
                });
        }
}


document.onclick = function hide(event) {
  const click = event.target;
  if (document.querySelector('.b-popup').classList.contains('hide') === true && (click.className === 'imgForClick' || click.classList.contains('descr'))) {
    document.querySelector('html').style.overflow = 'hidden';
    document.getElementById('menu').querySelectorAll('.card').forEach(el => document.querySelector('.b-popup').classList.remove('hide'));
    pizzaPopup(event)
  }
  else{
    if(click.className !== 'b-popup-content'){
    document.querySelector('.b-popup').classList.add('hide');
    document.getElementById('consequence').innerHTML = '';
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'auto';
  }
  }
};
