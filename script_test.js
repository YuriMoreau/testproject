
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const film1 = prompt("Oдин из последних фильмов", "");
const ocenka1 = prompt("На сколько его оцените?", "");
const film2 = prompt("Oдин из последних фильмов", "");
const ocenka2 = prompt("На сколько его оцените?", "");

personalMovieDB.movies[film1] = ocenka1;

personalMovieDB.movies[film2] = ocenka2;
console.log(personalMovieDB);