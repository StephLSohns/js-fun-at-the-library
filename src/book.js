
function createTitle(title) {
    return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, reviews) {
  if(!reviews.includes(review)) {
    reviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var bookObj = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: "fantasy",
  }
  return bookObj;
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * .75;
  return ghoulBook.pageCount;
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
