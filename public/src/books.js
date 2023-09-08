function findAuthorById(authors, id) {
  let found = authors.find((element) => element.id === id)
  return found}

function findBookById(books, id) {
  let found = books.find((element) => element.id === id)
  return found
}

function partitionBooksByBorrowedStatus(books) {
  let allBooks=[]
 
    const currentBorrow = books.filter((book) =>book.borrows[0].returned===false);
    allBooks.push(currentBorrow);
    const filterReturn= books.filter((book) => book.borrows[0].returned===true);
    allBooks.push(filterReturn);
  
  return allBooks
}

function getBorrowersForBook(book, accounts) {
  const answer=[]
  const borrowed = book.borrows
  for(let book of borrowed)
  {let found = accounts.find((account) => account.id === book.id);
  let matchingObject = found;  
 matchingObject['returned'] = book.returned;
 answer.push(matchingObject)
 
  }
return answer.slice(0,10)
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
