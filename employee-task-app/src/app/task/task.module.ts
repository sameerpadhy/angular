import {NgModule} from "@angular/core"
import { TaskComponent } from "./task.component";
import { EmployeeComponent } from "./employee.component";
import { SharedModule } from "../shared/shared.module";
@NgModule({
    imports:[SharedModule],
    declarations:[TaskComponent,EmployeeComponent],
    providers:[],
    exports:[TaskComponent,EmployeeComponent]
})
export class TaskModule{

}