import { BookService } from './../shared/book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  book: any = {};

  constructor(private bookServie: BookService,
              private router: Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.bookServie.getBook(this.id).subscribe((data: {}) => {
      this.book = data;
    });
  }

  // Update book data
  updateBook() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.bookServie.updateBook(this.id, this.book).subscribe(data => {
        this.router.navigate(['/book-list']);
      });
    }
  }
}
