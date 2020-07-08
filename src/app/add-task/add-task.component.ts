import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private taskService: TaskService) { }

  addFormTask: FormGroup;

  ngOnInit() {
    this.addFormTask = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  onSubmit() {
    this.taskService.createTask(this.addFormTask.value)
      .subscribe( data => {
        this.router.navigate(['list-task']);
      });
  }

  onCancel(){
    this.router.navigate(['list-task']);
  }
}
