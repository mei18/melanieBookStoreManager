export class Book {

    private bookId: number;
    private bookName: string;
    private author: string;
    private bookCategory: string;
    private price: number;

    constructor(bookId: number, bookName: string, author: string, bookCategory: string, price: number) {
        this.setBookId(bookId);
        this.setBookName(bookName);
        this.setAuthor(author);
        this.setBookCategory(bookCategory);
        this.setPrice(price);
    }

    getBookId() { return this.bookId };
    getBookName() { return this.bookName };
    getAuthor() { return this.author };
    getBookCategory() { return this.bookCategory };
    getPrice() { return this.price };

    setBookId(value) { this.bookId = value; }
    setBookName(value) { this.bookName = value; }
    setAuthor(value) { this.author = value; }
    setBookCategory(value) { this.bookCategory = value; }
    setPrice(value) { this.price = value; }

}
