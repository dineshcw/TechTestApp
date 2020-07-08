import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private router: Router, private taskService: TaskService) { }
  
  ngOnInit(): void {
    this.getTasks();
  }
  title = 'tech-test-app';

  getTasks() : void {
    this.taskService.getTasks()
      .subscribe( data => {
        this.tasks = data;
      })
  }

  deleteTask(task: Task): void {
    alert('Task delete successfully.');
    this.taskService.deleteTask(task.id)
      .subscribe( data => {
        this.tasks = this.tasks.filter(t => t !== task);
      })
  };

  updateTask(task: Task): void {
    this.router.navigate(['update-task']);
  };

  createTask(): void {
    this.router.navigate(['add-task']);
  };

}
