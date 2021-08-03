

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count == "" || personalMovieDB.count == null || 
    isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = personalMovieDB.count; i > 0; i--) {
      let film = "";
      while (film === "" || film.length > 50) {
        film = prompt("Oдин из последних фильмов", "");
      }
      let ocenka = prompt("На сколько его оцените?", "");
      personalMovieDB.movies[film] = ocenka;
    }
  },
  detectPersonalLevel: function(){
    if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else if (personalMovieDB.count > 10) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 0) {
      alert("Просмотрено довольно мало фильмов");
    } else {
      alert("Произошла ошибка");
    }
  }, 
  showMyDB: function (){
    if (personalMovieDB.privat == false){
      console.log(personalMovieDB);
    }
  }, 
  writeYourGenres: function(){
    for (let i = 1; i <= 3; i++){
      let genre = prompt("Ваш любимый жанр № " + i);
      if (genre === "" || genre == null){
        console.log("Некорректная операция");
        i--;
      } else {
      personalMovieDB.genres[i-1] = genre;}
    }

    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр #${i+1}  - это ${item}`);
    });
  },
  toggleVisibilityMyDB: function(){
    if(!personalMovieDB.privat){
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibilityMyDB();
personalMovieDB.showMyDB();