var navButton = $('.btn--mobile-menu'),
  navigation = $('.nav--main');

$(function () {

  navButton.on('click', function () {
    navigation.addClass('show-nav');
  });

});
