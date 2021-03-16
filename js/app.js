// FILTER
// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid-container').isotope({
  itemSelector: '.item-filter',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  // numberGreaterThan50: function() {
  //   var number = $(this).find('.number').text();
  //   return parseInt( number, 10 ) > 50;
  // },
  // show if name ends with -ium
  // ium: function() {
  //   var name = $(this).find('.name').text();
  //   return name.match( /ium$/ );
  // }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
// END FILTER


//SLICKY SLIDER
$(document).on('ready', function() {
  $(".regular").slick({
      dots: false,
      infinite: false,
      variableWidth: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,

      responsive: [
      {
          breakpoint: 1440,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          }
      },
      {
          breakpoint: 1025,
          settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
          }
      },
      {
          breakpoint: 991,
          settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1
          }
      },
      {
          breakpoint: 769,
          settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1
          }
      },
      {
          breakpoint: 427,
          settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1
          }
      },
      {
          breakpoint: 321,
          settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
          }
      }
      ]
  });

});
//SLICKY SLIDER