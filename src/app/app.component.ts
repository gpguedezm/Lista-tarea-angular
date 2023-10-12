import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tareas';

  tasks: { name: string, completed: boolean }[] = [
    { name: 'Comprar comida', completed: false },
    { name: 'Entrenar', completed: false },
    { name: 'Preparar comida', completed: false },
  ]

  newTask: string = '';

  addTask(){
    this.tasks.push({ name: this.newTask, completed: false});
    this.newTask='';
  }

  doneTask(index: number){
    this.tasks.splice(index, 1);
  }


}


