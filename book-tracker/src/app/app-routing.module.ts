import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'addbook', component: AddBookComponent },
    { path: 'addreader', component: AddReaderComponent },
    { path: 'editreader/:id', component: EditReaderComponent },
    { path: 'editbook/:id', component: EditBookComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})export class AppRoutingModule{

}