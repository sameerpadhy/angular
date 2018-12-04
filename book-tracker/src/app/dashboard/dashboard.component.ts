import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/data.service";
import { Reader } from "../models/reader.model";
import { Book } from "../models/book.model";

@Component({
    selector:'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    allBooks: Book[];
    allReaders: Reader[];

    booksCols;
    readersCols;
    constructor(public service: DataService){
       
    }

    ngOnInit(){
        this.allBooks=this.service.getAllBooks();
        this.allReaders=this.service.getAllReders();

        console.log("My Table Component On Changes...")
        if(this.allBooks.length > 0) {
            this.booksCols = Object.keys(this.allBooks[0]);
        }

        if(this.allReaders.length > 0) {
            this.readersCols = Object.keys(this.allReaders[0]);
        }

        
        console.log(this.booksCols);
    }

    
}