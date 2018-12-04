import {Component, Input, Output} from "@angular/core"
import { EventEmitter } from "@angular/core";
@Component({
    selector:'my-table',
    template:` <h3>{{tblName}}</h3>
    <table class="table table-bordered"> 
    <tr>
    <th *ngFor="let heading of headings">{{heading}}</th>
    <th>Action</th>
    </tr>
    
    <tr *ngFor="let row of data">
        <td *ngFor="let col of cols">{{row[col]}}</td>
        <td><button class="btn btn-primary" (click)="selectedData(row)">View</button></td>
    </tr>
    <tr *ngIf="data.length==0">
    <td colspan="4">No Data Found...</td>
    </tr>
    </table> `
})
export class MyTableComponent{

    @Input()
    tblName: string='';

    @Input()
    headings: string[]=[];

    @Input()
    data: any[]=[];

    @Output()
    event=new EventEmitter();

    cols;

    ngOnChanges(){
        console.log("My Table Component On Changes...")
        if(this.data.length > 0) {
            this.cols = Object.keys(this.data[0]);
        }
    }

    selectedData(selectedRow){
        this.event.emit(selectedRow);
    }
}