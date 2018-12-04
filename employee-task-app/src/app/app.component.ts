import {Component} from "@angular/core"
@Component({
    selector:'app-root',
    template:`
    <app-header></app-header>
    <br>
    <router-outlet>
    `
})
export class AppComponent{
    
}