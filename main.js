var movies = {
  init: function (){
    movies.renderAllAlien(alien);
    movies.renderAllDysfunct(dysfunct);
    movies.renderAllMustFind(mustFind);
    movies.renderAllDogs(Dog);

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

},

renderMustFind: function (mustFind, index, array) {
  mustFind.idx = index;
  var compiledMustFind = _.template(templates.movieData);
  $('.row').append(compiledMustFind(mustFind));


},

renderAllMustFind: function (MustFindInfo) {
  MustFindInfo.forEach(movies.renderMustFind);

},

renderDog: function (Dog, index, array) {
  Dog.idx = index;
  var compiledDog = _.template(templates.movieData);
  $('.row').append(compiledDog(Dog));


},

renderAllDogs: function (DogInfo) {
  DogInfo.forEach(movies.renderDog);

},

renderBelieve: function (Believe, index, array) {
  Believe.idx = index;
  var compiledBelieve = _.template(templates.movieData);
  $('.row').append(compiledBelieve(Believe));


},

renderAllBelieve: function (BelieveInfo) {
  BelieveInfo.forEach(movies.renderBelieve);

},




};





$(document).ready(function(){
  movies.init();



  $('section div').on('click', 'button', function(event){
    event.preventDefault();
    var relatedMood = '.' + $(this).attr('rel');
    $(this).siblings().addClass('animate');
    $(this).addClass('chosenOne');
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
