import { Component } from "@angular/core";
import { DataService } from "../core/data.service";
import { Reader } from "../models/reader.model";
import { Book } from "../models/book.model";
@Component({
    selector:'add-book',
    templateUrl:'add-book.component.html'
})
export class AddBookComponent{
    


    constructor(public dataService:DataService){

    }
    
  saveBook(formValues: any): void {
    let newBook: Book = <Book>formValues;
    newBook.bookID = 0;
    console.log(newBook);
    
    
  }
}