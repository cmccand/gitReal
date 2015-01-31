var movies = {
  init: function (){
    movies.renderAllAlien(alien);
    movies.renderAllDysfunct(dysfunct);

  },



  renderAlien: function (alien, index, array) {
    alien.idx = index;
    var compiledAlien = _.template(templates.movieData);
    $('.aliensResult').append(compiledAlien(alien));
    $('.aliensResult').siblings().remove();


  },

  renderAllAlien: function (alienInfo) {
    alienInfo.forEach(movies.renderAlien);
  },



renderDysfunct: function (dysfunct, index, array) {
  dysfunct.idx = index;
  var compiledDysfunct = _.template(templates.movieData);
  $('.dysfunctional').append(compiledDysfunct(dysfunct));
  $('.dysfunctional').siblings().remove();



},

renderAllDysfunct: function (dysfunctInfo) {
  dysfunctInfo.forEach(movies.renderDysfunct);


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

    $(this).siblings().removeClass('active');
    $(this).parent('section').removeClass('active');
    $(this).removeClass('active');
    $(this).parent().siblings('.results').addClass('active');

  });

  // $('.results').on('click', 'button', function (event) {
  //   event.preventDefault();
  //
  //   $(this).siblings().removeClass('active');
  //   $(this).parent('genre').removeClass('active');
  //   $(this).removeClass('active');
  //   $(this).parent().siblings('.aliensResult').addClass('active');
  // });


});
