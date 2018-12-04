import {Injectable} from "@angular/core";
import {allBooks, allReaders} from "../data";
import { Reader } from "../models/reader.model";
import { Book } from "../models/book.model";
@Injectable({
    providedIn: 'root'
  })
export class DataService{
    getAllBooks():Book[]{
        console.log(allBooks);
        return allBooks;
    }

    getAllReders(){
        return allReaders;
    }
}