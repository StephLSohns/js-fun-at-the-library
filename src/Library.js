 function createLibrary(name) {
   return {
     name: name,
     shelves: {
       fantasy: [],
       fiction: [],
       nonFiction: [],
     },
   }
 }

 function addBook(library, book) {
   if (book.genre === "fantasy") {
     if (!library.shelves.fantasy.includes(book)) {
       library.shelves.fantasy.push(book);
     }
   } else if (book.genre === "nonFiction") {
     if (!library.shelves.nonFiction.includes(book)) {
       library.shelves.nonFiction.push(book);
     }
   } else if (book.genre === "fiction") {
     if (!library.shelves.fiction.includes(book)) {
       library.shelves.fiction.push(book);
     }
   } else {
     return
   }
 }

 function checkoutBook(library, bookTitle) {
   var fictionBook = library.shelves.fiction.find(function(book) {
     if (book.title === bookTitle) {
       return book
     }
   })
   var fantasyBook = library.shelves.fantasy.find(function(book) {
     if (book.title === bookTitle) {
       return book
     }
   })
   var nonFictionBook = library.shelves.nonFiction.find(function(book) {
     if (book.title === bookTitle) {
       return book
     }
   })
   if (fictionBook) {
     library.shelves.fiction.pop(fictionBook)
     return `You have now checked out ${bookTitle} from the ${library.name}`
   } else if (fantasyBook) {
     library.shelves.fantasy.pop(fantasyBook)
     return `You have now checked out ${bookTitle} from the ${library.name}`
   } else if (nonFictionBook) {
     library.shelves.nonFiction.pop(nonFictionBook)
     return `You have now checked out ${bookTitle} from the ${library.name}`
   } else if (!fictionBook && !fantasyBook && !nonFictionBook) {
     return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
   }
 }


 module.exports = {
   createLibrary: createLibrary,
   addBook: addBook,
   checkoutBook: checkoutBook
 };
