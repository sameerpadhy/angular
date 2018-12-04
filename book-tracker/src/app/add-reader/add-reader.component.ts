import { Component } from "@angular/core";
import {Reader} from "../models/reader.model"
@Component({
    selector:'add-reader',
    templateUrl:'add-reader.component.html'
})
export class AddReaderComponent{

    constructor(){
        
    }

    saveReader(formValues: any): void {
        let newReader: Reader = <Reader>formValues;
        newReader.readerID = 0;
        console.log(newReader);
        console.warn('Save new reader not yet implemented.');
      }
}