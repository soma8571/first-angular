import { Component, inject} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ajax } from "rxjs/ajax";
import { map } from "rxjs";
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstApp'
  myName = 'Soma'
  todoService = inject(TodoService)

  leker() {
    //getData()
    this.todoService.getData()
    //console.log(x)
  }
}

type todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/todos"
  const todos$ = ajax(url).pipe(
          map(res => res.response as todo[])
      )
  todos$.subscribe(adat => console.log(adat))
}




