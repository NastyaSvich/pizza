function dropdownMenu(winWidth) {
  if (winWidth > 767) {
    $('.main-menu li.drop-down').on('mouseover', function mouse() {
      const $this = $(this);
      const menuAnchor = $this.children('a');
      menuAnchor.addClass('mouseover');
    }).on('mouseleave', function leave() {
      const $this = $(this);
      const menuAnchor = $this.children('a');
      menuAnchor.removeClass('mouseover');
    });
  } else {
    $('.main-menu li.drop-down > a').on('click', function mouseclick() {
      if ($(this).attr('href') === '#') return false;
      if ($(this).hasClass('mouseover')) {
        $(this).removeClass('mouseover');
      } else {
        $(this).addClass('mouseover');
      }
      return false;
    });
  }
}

(function burger($) {
  // DROPDOWN MENU
  let winWidth = $(window).width();
  dropdownMenu(winWidth);
  $(window).on('resize', () => {
    winWidth = $(window).width();
    dropdownMenu(winWidth);
  });

  $('[data-menu]').on('click', function clickmenu() {
    const mainMenu = $(this).data('menu');
    $(mainMenu).toggleClass('visible-menu');
  });
}(jQuery));
