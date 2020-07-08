import { Injectable } from '@angular/core';
import { Task } from '../app/model/task'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] =
                [
                  { "id": 1, "title": "Task 1", "description" : "Description 1" },
                  { "id": 2, "title": "Task 2", "description" : "Description 2" },
                  { "id": 3, "title": "Task 3", "description" : "Description 3" },
                ];

  constructor() { }
  baseUrl: string = 'http://localhost:8888/task/';

  getTasks(): Observable<Task[]> {
    var data = this.tasks;
    return of(data);
  }

  getTaskById(id: number): Observable<Task> {
    var data = this.tasks.filter(t=>t.id == id)[0];
    return of(data);
  }

  createTask(user: Task): Observable<Task> {
    return;
  }

  updateTask(user: Task): Observable<Task> {
    return;
  }

  deleteTask(id: number): Observable<Task[]> {
    return;
  }
}
