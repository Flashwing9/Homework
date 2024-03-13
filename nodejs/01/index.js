import { v4 as uuid } from "uuid";
import { DataService } from "./data.service.js";
import { fileURLToPath } from "node:url";
import path from "node:path";


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BOOKS_PATH = path.join(__dirname, "library.json");

// 1. Get all books
const getAllBooks = async () => {
  try {
    const books = await DataService.readJSONFile(BOOKS_PATH);

    return books;
  } catch (err) {
    // console.log(error);
    console.log(`something went wrong at: ${err.stack}`);
  }
};


const saveBooks = async books => {
  await DataService.saveJSONFile(BOOKS_PATH, books);
}
// // saveBooks("ooawoaoooaowoawawaoo");


// //book model & adding new book
// const createBook = async (title, author, publicationYear, quantity) => {
//   try {
//     const books = await getAllBooks();

//     const newBook = {
//       id: uuid(),
//       title,
//       author,
//       publicationYear,
//       quantity
//     };

//     books.push(newBook);

//     await saveBooks(books);
//   } catch (err) {
//     console.log(err.stack);
//   }
// }


// // Listing Books:
// const displayedLibrary = async () => {
//   try {
//     const librarianSays = await getAllBooks(); 
    
//     librarianSays.forEach(element => {
//       console.log(element.title);
//     });
//     // console.log(librarianSays);

//   } catch (err) {
//     console.log(err.stack);
//   }
// }
// // displayedLibrary()

// // createBook("One Piece", "Eichiro Oda", 1997, 1109)


// Updating book details !!!!not working
let findBookByNameAndUpdate = async (bookName, newTitle, newAuthor, newPublicationYear, newQuantity) => {
  try {
    const bookAwaitingUpdate = await getAllBooks();

    const foundBook = bookAwaitingUpdate.find(book => book.title === bookName);
    if (!foundBook) throw new Error("WRONG INPUT, BOOK NOT FOUND");

    const updatedBook = bookAwaitingUpdate.map(book => {
      if (book.title === bookName) {
        return {
          ...book,
          title: newTitle,
          author: newAuthor,
          publicationYear: newPublicationYear,
          quantity: newQuantity,
        };
      }
    });
    console.log(updatedBook);
    // await saveBooks(updatedBook);
    console.log(foundBook);
  } catch (err) {
    console.log(`here: ${err.stack} \n msg:${err.message}`);
  }
}
findBookByNameAndUpdate("Lord of The Rings", "Lord of The Rings aaaaa", "JRR Tolkien", 20000, 1);


// // delete a book
// const deleteBook = async bookId => {
//   try {
//     const books = await getAllBooks();

//     const booksAfterDeletion = books.filter(book => book.id !== bookId);

//     await saveBooks(booksAfterDeletion)
//   } catch (err) {
//     console.log(err.stack);
//   }
// }

// // deleteBook("b0afa7fe-ff92-437f-8773-9c0fdaab933e")

