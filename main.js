var movies = {
  init: function (){
    movies.renderAllAlien(alien);
    movies.renderAllDysfunct(dysfunct);
    movies.renderAllMustFind(mustFind);
    movies.renderAllDogs(Dog);
    movies.renderAllBelieve(Believe);
    movies.renderAllCancer(cancer);
    movies.renderAllFakeblood(Fakeblood);
    movies.renderAllPurple(Purple);
    movies.renderAllDrunk(Drunk);

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

},

renderDog: function (Dog, index, array) {
  Dog.idx = index;
  var compiledDog = _.template(templates.movieData);
  $('.dogEscapes').append(compiledDog(Dog));


},

renderAllDogs: function (DogInfo) {
  DogInfo.forEach(movies.renderDog);

},

renderBelieve: function (Believe, index, array) {
  Believe.idx = index;
  var compiledBelieve = _.template(templates.movieData);
  $('.justBelieve').append(compiledBelieve(Believe));


},

renderAllBelieve: function (BelieveInfo) {
  BelieveInfo.forEach(movies.renderBelieve);

},

renderCancer: function (cancer, index, array) {
  cancer.idx = index;
  var compiledCancer = _.template(templates.movieData);
  $('.cancer').append(compiledCancer(cancer));


},

renderAllCancer: function (CancerInfo) {
  CancerInfo.forEach(movies.renderCancer);

},

renderFakeblood: function (Fakeblood, index, array) {
  Fakeblood.idx = index;
  var compiledFakeblood = _.template(templates.movieData);
  $('.fakeBlood').append(compiledFakeblood(Fakeblood));


},

renderAllFakeblood: function (FakebloodInfo) {
  FakebloodInfo.forEach(movies.renderFakeblood);

},

renderPurple: function (Purple, index, array) {
  Purple.idx = index;
  var compiledPurple = _.template(templates.movieData);
  $('.purple').append(compiledPurple(Purple));

},

renderAllPurple: function (PurpleInfo) {
  PurpleInfo.forEach(movies.renderPurple);

},

renderDrunk: function (Drunk, index, array) {
  Drunk.idx = index;
  var compiledDrunk = _.template(templates.Drunk);
  $('.famousWriter').append(compiledDrunk(Drunk));


},

renderAllDrunk: function (DrunkInfo) {
  DrunkInfo.forEach(movies.renderDrunk);

}


};





$(document).ready(function(){
  movies.init();



  $('section div').on('click', 'button', function(event){
    event.preventDefault();
    var relatedMood = '.' + $(this).attr('rel');
    $(this).siblings().addClass('animate');
    $(this).addClass('chosenOne');
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
