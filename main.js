var movies = {
  init: function (){
    movies.renderAllAlien(alien);
    movies.renderAllDysfunct(dysfunct);
    movies.renderAllMustFind(mustFind);

  },



  renderAlien: function (alien, index, array) {
    alien.idx = index;
    var compiledAlien = _.template(templates.movieData);
    $('.aliensResult').append(compiledAlien(alien));


  },

  renderAllAlien: function (alienInfo) {
    alienInfo.forEach(movies.renderAlien);
  },



renderDysfunct: function (dysfunct, index, array) {
  dysfunct.idx = index;
  var compiledDysfunct = _.template(templates.movieData);
  $('.dysfunctional').append(compiledDysfunct(dysfunct));



},

renderAllDysfunct: function (dysfunctInfo) {
  dysfunctInfo.forEach(movies.renderDysfunct);

},

renderMustFind: function (mustFind, index, array) {
  mustFind.idx = index;
  var compiledMustFind = _.template(templates.movieData);
  $('.misplaced').append(compiledMustFind(mustFind));


},

renderAllMustFind: function (MustFindInfo) {
  MustFindInfo.forEach(movies.renderMustFind);

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

  // $('.genre').on('click', 'button', function (event) {
  //   event.preventDefault();
  //
  //   $(this).siblings().removeClass('active');
  //   $(this).parent('section').removeClass('active');
  //   $(this).removeClass('active');
  //   $(this).parent().siblings('.results').addClass('active');
  //
  // });

  // $('.results').on('click', 'button', function (event) {
  //   event.preventDefault();
  //
  //   $(this).siblings().removeClass('active');
  //   $(this).parent('genre').removeClass('active');
  //   $(this).removeClass('active');
  //   $(this).parent().siblings('.aliensResult').addClass('active');
  // });
  //

});
