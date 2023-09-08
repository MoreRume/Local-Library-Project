function sortBooksByDescendingOrder (books=[]) {
  return books.sort((bookA, bookB)=>{
    return bookB.borrows.length - bookA.borrows.length
  })
}

function getTotalBooksCount(books) {
  let total = books.length
  return total
}

function getTotalAccountsCount(accounts) {
  let total = accounts.length
  return total
}

function getBooksBorrowedCount(books) {
  let answer = 0
  for(let book of books){
    const currentBorrow = book.borrows;
    const filteredBorrow = currentBorrow.filter((book) =>!book.returned)
    answer+= filteredBorrow.length
  }
  return answer
}

let getMostCommonGenres = (books) => {
  const genreCount = {};
  books.forEach(({ genre }) => {
    genreCount[genre] = genreCount[genre] ? genreCount[genre] + 1 : 1; 
  });
  return Object.keys(genreCount)
    .map((genre) => ({ name: genre, count: genreCount[genre] })) 
    .sort((genreA, genreB) => genreB.count - genreA.count) 
    .slice(0, 5);
};
/*function getMostCommonGenres(books) {
 let genreCount = {}
 books.forEach(({ genre }) => {   genreCount[genre] = 
  genreCount[genre] ? genreCount[genre] + 1 : 1;});
  const list= Object.keys(genreCount).map((genre) => 
  ({ name: genre, count: genreCount[genre] }))
 const sorted=list.sort((genreA,genreB) => (genreA.count - genreB.count)? 1:-1)
}
*/
const getMostPopularBooks = (books=[]) => { 
  books = sortBooksByDescendingOrder(books)
  const timesBorrowed = books.map(({title, borrows})=>{
    return { name : title, count : borrows.length};
  })
  return timesBorrowed.slice(0,5);
}

/*function getMostPopularAuthors(books, authors) {
  const author = authors.map((name) => {return {name:name.first+name.last, count:0}})
  const booksByAuthor = books.filter((book) => book.authorId === authors.id)
  author.forEach((writer) => conditional ? writer.count++ : writer.count+0)
}
*/

function getMostPopularAuthors(books, authors) {
  const authorCounts = books.reduce((counts, book) => {
  const authorId = book.authorId;
  counts[authorId] = (counts[authorId] || 0) + book.borrows.length;
  return counts;
  }, {});
  const sortedAuthors = Object.keys(authorCounts).map((authorId) => {
    const writer = authors.find((author) => author.id === parseInt(authorId));
    return { name: `${writer.name.first} ${writer.name.last}`, count: authorCounts[authorId] };
    });
    //function rearrange(list){
      // then return statement to sort and slice array
      //return Object.keys(list)
      //.sort((bookA,bookB) =>bookA.count - bookB.count ? 1:-1)
     // .slice(0,5) }
    return sortedAuthors.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
    }



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
