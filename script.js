'use strict';

const numberOfFilms = +prompt('How many films did you see?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: {},
    privat: false
};

console.log(personalMovieDB);

for (let i = 1; i <= 2; i++) {
    
    const a = prompt('Один из последних просмотренных фильмов?','');
    const b = prompt('На сколько оцените его?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('Error');
        i--;
    }
}

if ( personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель') ;
} else if (personalMovieDB.count > 30) {
    alert('Вы классический зритель');
} else {
    alert('Произошла ошибка');
}


