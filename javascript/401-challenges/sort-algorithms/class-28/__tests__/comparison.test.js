const { sortByMostRecentYear, sortByTitleIgnoringArticles, movies } = require('../index');

const testMovies = [
  { title: "The Shawshank Redemption", year: 1994, genres: ["Drama"] },
  { title: "The Godfather", year: 1972, genres: ["Crime", "Drama"] },
  { title: "The Dark Knight", year: 2008, genres: ["Action", "Crime", "Drama"] },
  { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
  { title: "A Beautiful Mind", year: 2001, genres: ["Biography", "Drama"] },
  { title: "An Inconvenient Truth", year: 2006, genres: ["Documentary"] },
];

describe('Sorting Movies', () => {
  test('sortByMostRecentYear should sort movies by the most recent year first', () => {
    const sortedMovies = sortByMostRecentYear(testMovies);
    expect(sortedMovies[0].year).toBe(2008);
    expect(sortedMovies[1].year).toBe(2006);
    expect(sortedMovies[2].year).toBe(2001);
    expect(sortedMovies[3].year).toBe(1994);
  });

  test('sortByTitleIgnoringArticles should sort movies alphabetically by title, ignoring leading articles', () => {
    const sortedMovies = sortByTitleIgnoringArticles(testMovies);
    expect(sortedMovies[0].title).toBe("A Beautiful Mind");
    expect(sortedMovies[1].title).toBe("The Dark Knight");
    expect(sortedMovies[2].title).toBe("The Godfather");
    expect(sortedMovies[3].title).toBe("An Inconvenient Truth");
  });
});
