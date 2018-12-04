import {Task} from '../models/task.model'
import { OnInit, Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class TaskService{
    tasks: Task[]=[];
    constructor(){
        this.tasks=[new Task(1,"Salary","Completed")];
    }

    getAlltasks(){
        return this.tasks;
    }
}