import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AppRouter } from './app.route';
import { TodosService } from './providers/todosservice';




@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouter,
    FormsModule
  ],
  providers: [HttpClientModule,TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
