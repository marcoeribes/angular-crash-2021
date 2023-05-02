import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task, Color } from '../../Task';

@Component({
  selector: 'app-add-task-item',
  templateUrl: './add-task-item.component.html',
  styleUrls: ['./add-task-item.component.css']
})
export class AddTaskItemComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  color: string;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onClick(){
    this.showAddTask = !this.showAddTask;
    this.color = this.randomColor();
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      color: this.color,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.color = this.color;

    this.showAddTask = false;
  }

  randomColor(): Color {
    const randomIndex = Math.floor(Math.random() * 6);
    switch (randomIndex) {
      case 0:
        return "yellow";
      case 1:
        return "pink";
      case 2: 
        return "cyan";
      case 3: 
        return "orange";
      case 4: 
        return "magenta";
      case 5:
        return "green";
      default:
        return "yellow";
    }
  }
}
