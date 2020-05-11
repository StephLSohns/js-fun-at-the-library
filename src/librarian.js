var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, bool) {
    if (bool === true) {
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }

  findBook(bookTitle) {
    var genreValues = Object.values(this.library.shelves)
    var gotIt = false;
    for(var i = 0; i < genreValues.length; i++) {
      var shelf = genreValues[i]
      var isFound = shelf.find(function(book) {
        return book.title === bookTitle
      })
      if(isFound) {
        gotIt = true;
      }
    }
    if(!gotIt) {
      return `Sorry, we do not have ${bookTitle}`
    } else if(gotIt) {
      return `Yes, we have ${bookTitle}`
    }
  }

}

module.exports = Librarian;
