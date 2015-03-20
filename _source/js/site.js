var navButton = $('.button--mobile-menu'),
  signupButton = $('.button--signup'),
  navigation = $('#main-nav');

$(function () {

  navButton.on('click', function () {
    navigation.toggleClass('show-menu');
  });

  signupButton.on('hover', function (e) {
    e.preventDefault();
    $('#user-nav').toggleClass('menu-signup--active');
  });

});
