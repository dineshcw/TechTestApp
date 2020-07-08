import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TaskService} from '../app/task.service'
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasks: Task[];

  constructor(private router: Router, private taskService: TaskService) { }
  
  ngOnInit(): void {
  }
  title = 'tech-test-app';

  
}
