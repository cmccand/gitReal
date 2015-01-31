var movies = {
  init: function (){
    movies.renderAllAlien(alien);

  },



  renderAlien: function (alien, index, array) {
    alien.idx = index;
    var compiledAlien = _.template(templates.movieData);
    $('.row').append(compiledAlien(alien));


  },

  renderAllAlien: function (alienInfo) {
    alienInfo.forEach(movies.renderAlien);
  }


};








$(document).ready(function(){
  movies.init();



  $('section div').on('click', 'button', function(event){
    event.preventDefault();
    var relatedMood = '.' + $(this).attr('rel');
    $(this).siblings().addClass('animate');
    // $(this).addClass('animateChoice');
    $(relatedMood).addClass('active');
    $(relatedMood).parent('div').addClass('active');
    $(relatedMood).parent().siblings().removeClass('active');


  });

  $('.genre').on('click', 'button', function (event) {
    event.preventDefault();

    $(this).siblings.removeClass('active');
    $(this).parent('section').removeClass('active');
    $(this).removeClass('active');
    $(this).parent.siblings('.results').addClass('active');
  });


});
