
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms(){
  for (let i = numberOfFilms; i > 0; i--){
    let film = "";
    while  (film === "" || film.length>50) {
      film = prompt("Oдин из последних фильмов", "");
    }
    let ocenka = prompt("На сколько его оцените?", "");
    personalMovieDB.movies[film] = ocenka;
  }
}
rememberMyFilms();



function detectPersonalLevel(){
  if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else if (personalMovieDB.count > 10) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 0) {
    alert("Просмотрено довольно мало фильмов");
  } else {
    alert("Произошла ошибка");
  }
}
detectPersonalLevel();

function showMyDB(){
  if (personalMovieDB.privat == false){
    console.log(personalMovieDB);
  }
}

function writeYourGenres(){
  for (let i = 1; i <= 3; i++){
    let genre = prompt("Ваш любимый жанр № " + i);
    personalMovieDB.genres[i-1] = genre;
  }
}
writeYourGenres();
showMyDB();