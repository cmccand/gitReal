var movies = {
  init: function (){
    movies.renderAllAlien(alien);

  },



  renderAlien: function (alien, index, array) {
    alien.idx = index;
    var compiledAlien = _.template(templates.movieData);
    $('.aliensResult').append(compiledAlien(alien));


  },

  renderAllAlien: function (alienInfo) {
    alienInfo.forEach(movies.renderAlien);
  }


};








$(document).ready(function(){
  movies.init();

  $('div').on('click', 'button', function(event){
    event.preventDefault();

    var relatedMood = '.' + $(this).attr('rel');
    $(this).siblings().remove();
    $(this).remove();
    $(relatedMood).addClass('active');
    $(relatedMood).parent('div').addClass('active');


  });


});
