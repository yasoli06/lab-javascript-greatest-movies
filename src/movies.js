// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) => movie.director);
    return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function uniqueDirectors(moviesArray) {
    let allDirectors = movies.map(movie => movie.director);
    return allDirectors.filter((director, index) => {
        return allDirectors.indexOf(director) === index;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie =>
        movie.director === "Steven Spielberg" && 
    //como drama es una matriz, utiliza el include para buscarla en la matriz.
        movie.genre.includes("Drama")
    ).length; // para saber la cantidad de elementos(pelicula) en la matriz del filter.
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
//sumar las puntuaciones:
    let totalScore = moviesArray.reduce((acumulador, movie) => {
        return acumulador + (movie.score || 0);
    }, 0);
// calcular the average:
    let averageScore = totalScore / moviesArray.length;
// poner a 2 decimales:
return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
//filtrar las pelis de drama:
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) return 0;
//Sumar las puntuaciones de las pelis:
    let totalDramaScore= dramaMovies.reduce((acumulador, movie) => {
        return acumulador + (movie.score || 0);
    }, 0);
// Calcular la punt media:
    let averageScore = totalDramaScore / dramaMovies.length;
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
//crear una copia de la matriz 
    let moviesCopy = [...moviesArray];
//ordenar la copia:
    moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
// ordenar por año de estreno:
        return a.year - b.year;        
    });
    return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesCopy = [...moviesArray];
//extraer los titulos:
    let titles = moviesCopy.map(movie => movie.title);
//ordenar alfabeto:
    titles.sort((a, b) => a.localeCompare(b));
//seleccionar la cantidad (20 primeros):
    return titles.slice(0, 20); 
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let moviesCopy = moviesArray.map(movie => ( {...movie}));
//Convertir la duracion a minutos:
    moviesCopy.forEach(movie => {
        let duration = movie.duration;
        let time = duration.split(' ');
        let minutes = 0;

        time.forEach(part => {
            if(part.includes('h')) {
                minutes += parseInt(part) * 60;
            } else if (part.includes('min')) {
                minutes += parseInt(part);
            }
        });
        movie.duration = minutes;
    });
    return moviesCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (movies.length === 0) {
        return null;
      } else {
        if (movies.length === 1) {
          return `The best year was ${movies[0].year} with an average score of ${movies[0].score}`;
        } else {
          let yearScores = {};
          for (let i = 0; i < movies.length; i++) {
            let movie = movies[i];
            if (!yearScores[movie.year]) {
              yearScores[movie.year] = { totalScore: 0, count: 0 };
            }
            yearScores[movie.year].totalScore += movie.score;
            yearScores[movie.year].count += 1;
          }
          let bestYear = null;
          let bestAverageScore = 0;
          let years = Object.keys(yearScores);
          for (let i = 0; i < years.length; i++) {
            let year = years[i];
            let averageScore = yearScores[year].totalScore / yearScores[year].count;
            if (averageScore > bestAverageScore) {
              bestAverageScore = averageScore;
              bestYear = year;
            }
          }
          return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(
            1
          )}`;
        }
      }
    }
