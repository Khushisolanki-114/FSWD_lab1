const movies = [
    { title: "Moana", genre: "Animation", rating: 8.8, releaseYear: 2016 },
    { title: "Yeh jawani hai dewani", genre: "Action", rating: 9.0, releaseYear: 2016 },
    { title: "Moana 2", genre: "Animation", rating: 9.5, releaseYear: 2024 }
];

const addMovie = (collection, movie) => {
    collection.push(movie);
};

addMovie(movies, { title: "Best truth", genre: "Sci-Fi", rating: 7.5, releaseYear: 2020 });
console.log(movies);

const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
console.log(listMoviesByGenre(movies, "Animation"));

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
console.log(findHighestRatedMovie(movies));

const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};
console.log(getMovieTitles(movies));

const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};
console.log(moviesAfterYear(movies,2020));

movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});








