import {Component, OnInit} from "@angular/core"
import {Emp} from "../models/emp.model"
import {EmpService} from "../service/emp.service"
@Component({
    selector:'employee-app',
    template:`
    <h1>Employee is :{{selectedEmp}}</h1>
    <my-table [tblName]=(tblName) [headings]=(headings) [data]="employees" (event)="selectedEmployee($event)"></my-table>
    `
})
export class EmployeeComponent implements OnInit{

    tblName: string='Employees';
    headings: string[]=[];
    employees: Emp[];
    selectedEmp: string;
    constructor(service:EmpService){
        this.headings=["EmpID", "Emp Name", "Mobile No.", "E-mail Id"];
        //this.employees=[new Emp(101, "sameer","922233","name@sameer.com"),new Emp(102, "raghu","3434","id@sameer.com")]
        this.selectedEmp="";
        this.employees=service.getEmployees();
    }

    ngOnInit(){
        //this.employees=this.service.getEmployees();
    }


    selectedEmployee(emp:Emp){
        this.selectedEmp=emp.name;
    }

}