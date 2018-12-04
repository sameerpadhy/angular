import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import { MyTableComponent } from "./mytable.component";
import {HeaderComponent} from "./header.component"
import { HomeComponent } from "./home.component";
@NgModule({
  imports:[CommonModule],
  exports:[MyTableComponent,HeaderComponent, HomeComponent],
  declarations:[MyTableComponent,HeaderComponent, HomeComponent]
})
export class SharedModule{

}