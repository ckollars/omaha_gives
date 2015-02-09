var navButton = $('.btn--mobile-menu'),
  navigation = $('#main-nav');

$(function () {

  navButton.on('click', function () {
    navigation.toggleClass('show-menu');
  });

});
