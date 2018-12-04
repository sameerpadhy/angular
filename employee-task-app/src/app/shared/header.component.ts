import {Component} from "@angular/core"
@Component({
    selector:'app-header',
    template:`<nav class="navbar navbar-expand-sm bg-light">

    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="/" class="nav-link" routerLink="/">Home</a>
      </li>
      <li class="nav-item">
        <a href="/emp" class="nav-link" routerLink="/emp">Employees</a>
      </li>
      <li class="nav-item">
        <a href="/task" class="nav-link" routerLink="/task">Tasks</a>
      </li>
    </ul>
  
  </nav>`
})
export class HeaderComponent{
    appName: string='';
    constructor(){
        this.appName='Task App';
    }
}