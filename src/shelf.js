  function shelfBook(book, sciFiShelf) {
  if(sciFiShelf.length < 3) {
    return sciFiShelf.unshift(book);
  }
    return
}

function unshelfBook(title, sciFiShelf) {
  var element = sciFiShelf.find(function(book) {
    return book.title === title
  })
    var num = sciFiShelf.indexOf(element)
    sciFiShelf.splice(num, 1)
    return sciFiShelf
}

function listTitles(fantasyShelf) {
  var fSTitles = [];
  for(var i = 0; i < fantasyShelf.length; i++) {
    fSTitles.push(fantasyShelf[i].title)
  }
  return fSTitles.join(", ")
}

function searchShelf(sciFiShelf, title) {
  var bool = false;
  for(var i = 0; i < sciFiShelf.length; i++) {
    if(sciFiShelf[i].title === title) {
      bool = true
    }
  }
  return bool
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
