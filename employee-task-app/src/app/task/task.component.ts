import {Component} from "@angular/core";
import {Task} from "../models/task.model";
import {TaskService} from "../service/task.service"
@Component({
 selector:'task-app',
 template:`<my-table [tblName]=(tblName) [headings]=(headings) [data]=(tasks)></my-table>`
})
export class TaskComponent{
    tblName: string='Tasks';
    headings: string[]=[];
    tasks: Task[]=[];
    constructor(service:TaskService){
        this.headings=["Task Id", "Task name", "Status"];
        //this.tasks=[new Task(1,"Salary","Completed")];
        this.tasks=service.getAlltasks();
    }

}