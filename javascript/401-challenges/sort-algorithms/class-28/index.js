const movies = [
  { title: "The Shawshank Redemption", year: 1994, genres: ["Drama"] },
  { title: "The Godfather", year: 1972, genres: ["Crime", "Drama"] },
  { title: "The Dark Knight", year: 2008, genres: ["Action", "Crime", "Drama"] },
  { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
  { title: "A Beautiful Mind", year: 2001, genres: ["Biography", "Drama"] },
  { title: "An Inconvenient Truth", year: 2006, genres: ["Documentary"] },
];

function sortByMostRecentYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortByTitleIgnoringArticles(movies) {
  const articles = ["A ", "An ", "The "];

  return movies.sort((a, b) => {
    const titleA = removeLeadingArticle(a.title);
    const titleB = removeLeadingArticle(b.title);
    return titleA.localeCompare(titleB);
  });

  function removeLeadingArticle(title) {
    for (let article of articles) {
      if (title.startsWith(article)) {
        return title.substring(article.length);
      }
    }
    return title;
  }
}

module.exports = {
  sortByMostRecentYear,
  sortByTitleIgnoringArticles,
  movies
};
