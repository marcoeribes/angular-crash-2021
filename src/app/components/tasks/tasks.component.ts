import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleColor(task: Task){
    switch(task.color){
      case 'yellow': 
        task.color = 'pink';
        break;
      case 'pink': 
        task.color = 'cyan';
        break;
      case 'cyan':
        task.color = 'orange';
        break;
      case 'orange':
        task.color = 'magenta';
        break;
      case 'magenta':
        task.color = 'green';
        break;
      case 'green':
        task.color = 'yellow';
        break;
    }
    this.taskService.updateTaskColor(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
