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
    movies.renderAllSuck(youSuck);
    movies.renderAllForties(Forties);
    movies.renderAllHappy(happySince12);
    movies.renderAllmaid(maid);
    movies.renderAllVDay(vDay);
    movies.renderAllDeadDog(deadDog);
    movies.renderAllBitter(bitter);
    movies.renderAllRudy(Rudy);
    movies.renderAllTheme(Theme);
    movies.renderAllAsshole(asshole);
    movies.renderAllPrison(Prison);
    movies.renderAllGenius(genius);
    movies.renderAllNazi(nazi);
    movies.renderAllSplatter(splatter);
    movies.renderAllHurt(hurt);
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
  var compiledDrunk = _.template(templates.movieData);
  $('.famousWriter').append(compiledDrunk(Drunk));


},

renderAllDrunk: function (DrunkInfo) {
  DrunkInfo.forEach(movies.renderDrunk);

},

renderSuck: function (youSuck, index, array) {
  youSuck.idx = index;
  var compiledYouSuck = _.template(templates.movieData);
  $('.youSuck').append(compiledYouSuck(youSuck));


},

renderAllSuck: function (SuckInfo) {
  SuckInfo.forEach(movies.renderSuck);

},

renderForties: function (Forties, index, array) {
  Forties.idx = index;
  var compiledForties = _.template(templates.movieData);
  $('.witty').append(compiledForties(Forties));


},

renderAllForties: function (FortiesInfo) {
  FortiesInfo.forEach(movies.renderForties);

},

renderHappy: function (happySince12, index, array) {
  happySince12.idx = index;
  var compiledHappy = _.template(templates.movieData);
  $('.happySince12').append(compiledHappy(happySince12));

},

renderAllHappy: function (HappyInfo) {
HappyInfo.forEach(movies.renderHappy);

},

rendermaid: function (maid, index, array) {
  maid.idx = index;
  var compiledMaid = _.template(templates.movieData);
  $('.hotelMaid').append(compiledMaid(maid));

},

renderAllmaid: function (maidInfo) {
  maidInfo.forEach(movies.rendermaid);

},

renderVDay: function (vDay, index, array) {
  vDay.idx = index;
  var compiledVDay = _.template(templates.movieData);
  $('.vDay').append(compiledVDay(vDay));

},

renderAllVDay: function (vDayInfo) {
  vDayInfo.forEach(movies.renderVDay);

},

renderDeadDog: function (deadDog, index, array) {
  deadDog.idx = index;
  var compiledDeadDog = _.template(templates.movieData);
  $('.dog').append(compiledDeadDog(deadDog));

},

renderAllDeadDog: function (deadDogInfo) {
  deadDogInfo.forEach(movies.renderDeadDog);

},

renderBitter: function (bitter, index, array) {
  bitter.idx = index;
  var compiledBitter = _.template(templates.movieData);
  $('.bitter').append(compiledBitter(bitter));

},

renderAllBitter: function (bitterInfo) {
  bitterInfo.forEach(movies.renderBitter);

},

renderRudy: function (Rudy, index, array) {
  Rudy.idx = index;
  var compiledRudy = _.template(templates.movieData);
  $('.rudySacks').append(compiledRudy(Rudy));

},

renderAllRudy: function (RudyInfo) {
  RudyInfo.forEach(movies.renderRudy);

},

renderBitter: function (bitter, index, array) {
  bitter.idx = index;
  var compiledBitter = _.template(templates.movieData);
  $('.bitter').append(compiledBitter(bitter));

},

renderAllBitter: function (bitterInfo) {
  bitterInfo.forEach(movies.renderBitter);

},

renderTheme: function (Theme, index, array) {
  Theme.idx = index;
  var compiledTheme = _.template(templates.movieData);
  $('.themeMusic').append(compiledTheme(Theme));

},

renderAllTheme: function (ThemeInfo) {
  ThemeInfo.forEach(movies.renderTheme);

},

renderAsshole: function (asshole, index, array) {
  asshole.idx = index;
  var compiledAsshole = _.template(templates.movieData);
  $('.assholeMakeHistory').append(compiledAsshole(asshole));

},

renderAllAsshole: function (AssholeInfo) {
  AssholeInfo.forEach(movies.renderAsshole);

},

renderPrison: function (Prison, index, array) {
  Prison.idx = index;
  var compiledPrison = _.template(templates.movieData);
  $('.survivePrison').append(compiledPrison(Prison));

},

renderAllPrison: function (PrisonInfo) {
  PrisonInfo.forEach(movies.renderPrison);

},

renderGenius: function (genius, index, array) {
  genius.idx = index;
  var compiledGenius = _.template(templates.movieData);
  $('.genius').append(compiledGenius(genius));

},

renderAllGenius: function (GeniusInfo) {
  GeniusInfo.forEach(movies.renderGenius);

},

renderNazi: function (nazi, index, array) {
  nazi.idx = index;
  var compiledNazi = _.template(templates.movieData);
  $('.nazi').append(compiledNazi(nazi));

},

renderAllNazi: function (NaziInfo) {
  NaziInfo.forEach(movies.renderNazi);

},

renderSplatter: function (splatter, index, array) {
  splatter.idx = index;
  var compiledSplatter = _.template(templates.movieData);
  $('.splatter').append(compiledSplatter(splatter));

},

renderAllSplatter: function (SplatterInfo) {
  SplatterInfo.forEach(movies.renderSplatter);

},

renderHurt: function (hurt, index, array) {
  hurt.idx = index;
  var compiledHurt = _.template(templates.movieData);
  $('.hurtYourself').append(compiledHurt(hurt));

},

renderAllHurt: function (HurtInfo) {
  HurtInfo.forEach(movies.renderHurt);

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
