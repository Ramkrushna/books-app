import { BookService } from './../shared/book.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  @Input() book = { name: '', description: '', price: 0, quantity: 0 };

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  addBook(bookData) {
    this.bookService.createBook(this.book).subscribe((data: {}) => {
      this.router.navigate(['/book-list']);
    });
  }

}
