import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import { Browser } from "protractor";
import { AppComponent } from "./app.component";
import {TaskModule} from "./task/task.module"
import { SharedModule } from "./shared/shared.module";
import {RouterModule} from '@angular/router'
import { HomeComponent } from "./shared/home.component";
import { EmployeeComponent } from "./task/employee.component";
import { TaskComponent } from "./task/task.component";
import {EmpService} from "../app/service/emp.service"
import {TaskService} from "../app/service/task.service"
@NgModule({
    imports:[BrowserModule,TaskModule, SharedModule, 
        RouterModule.forRoot([{path:"", component:HomeComponent},
                              {path:"emp", component:EmployeeComponent},
                              {path:"task", component:TaskComponent}])],
    declarations:[AppComponent],
    providers:[EmpService,TaskService],
    bootstrap:[AppComponent]
})
export class AppModule{

}