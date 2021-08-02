
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = numberOfFilms; i > 0; i--){
  let film = "";
  while  (film === "" || film.length>50) {
    film = prompt("Oдин из последних фильмов", "");
  }
  let ocenka = prompt("На сколько его оцените?", "");
  personalMovieDB.movies[film] = ocenka;
}

if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else if (personalMovieDB.count > 10) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 0) {
  alert("Просмотрено довольно мало фильмов");
} else {
  alert("Произошла ошибка");
}


console.log(personalMovieDB);