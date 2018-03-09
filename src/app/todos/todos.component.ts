import { Component, OnInit } from '@angular/core';

import { Todo } from '../model/todo';
import { TodosService } from '../providers/todosservice';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos : Todo[];
  nuevatarea:string;

  constructor( public todosService:TodosService ) {
      console.log('TodosComponent constructor');
      this.todos = [];
  }

  ngOnInit() {
    console.log('TodosComponent ngOnInit');
    this.todosService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
  //ngOnInit
  /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapeo( result : any ){

    let todo:Todo;
    result.forEach(el => {
        todo = new Todo( el.title );
        todo.id = el.id;
        todo.idUser = el.userId;
        todo.completed = el.completed;

        this.todos.push(todo);
    });

  }


  eliminar(){


  }
  
  insertarTarea(){


  }
tachar(result : any ){

  let elemento:Todo;
  result.forEach(el => {
    elemento = new Todo( el.title );
    elemento.id = el.id;
     // el.id.scss.text-decoration:line-through;
      this.todos.push(elemento);

});

}

}