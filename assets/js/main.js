'use strict';

$(document).ready(function () {
  $('.menu-btn').on('click', function () {
    $('body').toggleClass('sidebar_closed');
  });

  $('.project-grid:not(.project-grid--square)').each(function () {
    var $grid = $(this);

    $grid.isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: 30,
      },
    });

    $grid.imagesLoaded().progress(function () {
      $grid.isotope('layout');
    });
  });

  $(window).on('load resize', function () {
    $('.project-grid:not(.project-grid--square)').isotope('layout');
  });

  if ($('.text-slider').length === 1) {
    var typed_strings = $('.text-slider-items').text();
    new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
    });
  }
});
