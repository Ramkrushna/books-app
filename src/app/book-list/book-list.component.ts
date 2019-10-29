import { BookService } from './../shared/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadBooks();
  }

  // Get book list
  loadBooks() {
    return this.bookService.getBooks().subscribe((data: {}) => {
      console.log('****************data:' + data);
      this.books = data;
    });
  }

  // Delete book
  deleteBook(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.bookService.deleteBook(id).subscribe(data => {
        this.loadBooks();
      });
    }
  }

}
