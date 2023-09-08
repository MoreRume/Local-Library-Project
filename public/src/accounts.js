function findAccountById(accounts, id) {
let found = accounts.find((element) => element.id === id)
return found
}

function sortAccountsByLastName(accounts) {
return accounts.sort((nameA,nameB) => nameA.name.last>nameB.name.last ? 1:-1)

}

function getTotalNumberOfBorrows(account, books) {
  let tally = 0
  const key=account.id;
  for( let id in books){
    const borrowedBooks = books[id].borrows.filter(book => book.id === key)
    tally+= borrowedBooks.length
    }
  return tally
}

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks= books.filter((book) => {
    const currentBorrow = book.borrows[0];
    return !currentBorrow.returned && currentBorrow.id === account.id
  });
  checkedOutBooksWithAuthors = checkedOutBooks.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return {
      ...book,
      author,
    };
  });
  return checkedOutBooksWithAuthors
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
