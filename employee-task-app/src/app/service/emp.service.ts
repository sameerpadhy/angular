import {Emp} from '../models/emp.model'
import { OnInit, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class EmpService implements OnInit{
    private empData:Emp[];
    constructor(){
        this.empData=[new Emp(101, "sameer","922233","name@sameer.com"),new Emp(102, "raghu","3434","id@sameer.com")] ;
    }
    ngOnInit(){
        
    }

    getEmployees(){
        console.log("inside method call");
        return this.empData;
    }
}