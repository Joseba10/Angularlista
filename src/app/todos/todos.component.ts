import { Component, OnInit } from '@angular/core';

import { Todo } from '../model/todo';
import { TodosService } from '../providers/todosservice';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  nuevatarea: string;

  constructor(public todosService: TodosService) {
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
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
  //ngOnInit
  /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapeo(result: any) {

    let todo: Todo;
    result.forEach(el => {
      todo = new Todo(el.title);
      todo.id = el.id;
      todo.idUser = el.userId;
      todo.completed = el.completed;

      this.todos.push(todo);
    });

  }
  cargarTareas(){
    console.log('TodosComponent cargarTareas');
    this.todos = [];
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

  eliminar(todo:Todo){
    console.log('TodosComponent delete %o', todo );

    this.todosService.delete(todo.id).subscribe(
      result=>{
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo eliminar Tarea');
      }
    );
    

}

change(todo:Todo){
  console.log('TodosComponent change %o', todo );
  this.todos.forEach( (t, index) =>{
    if ( t.id === todo.id ){
      this.todos[index].completed = !todo.completed;
      return false; //break        
    }
  });
}
 
 
  new(){
  console.log('TodosComponent new ');
  let todo = new Todo(this.nuevatarea);

  this.todosService.post(todo).subscribe(
    result=>{
      console.log('TodosComponent new %o', result);
      this.cargarTareas();
    },
    error=>{
      alert('No se pudo Crear Nueva Tarea');
      console.error(error);
    }
  );
}

}
