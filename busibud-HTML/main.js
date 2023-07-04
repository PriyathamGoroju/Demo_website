$(document).ready(function() {
    $('nav li').click(function() {
      $(this).children('ul').toggle();
    });
  });