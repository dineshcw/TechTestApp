import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: Task;
  editFormTask: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    let taskId = window.localStorage.getItem("editUserId");
    this.editFormTask = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.taskService.getTaskById(+taskId)
      .subscribe( data => {
        this.editFormTask.setValue(data);
      });
  }

  onCancel(){
    this.router.navigate(['list-task']);
  }

  onSubmit() {
    alert('Task updated successfully.');
            this.router.navigate(['list-task']);
    // this.taskService.updateTask(this.editFormTask.value)
    //   .subscribe(
    //     data => {
    //       alert('Task updated successfully.');
    //         this.router.navigate(['list-task']);
    //     },
    //     error => {
    //       alert("Error");
    //     });
  }

}
