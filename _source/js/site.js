var navButton = $('.btn--mobile-menu'),
  signupButton = $('.btn--signup'),
  navigation = $('#main-nav');

$(function () {

  navButton.on('click', function () {
    navigation.toggleClass('show-menu');
  });

  signupButton.on('click', function (e) {
    e.preventDefault();
    $('#user-nav').toggleClass('menu-signup--active');
  });

});
