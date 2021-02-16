import { List } from './../../models/list.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: List[];
  tasks: Task[];
  listId: string;

  constructor(private taskService: TaskService, 
              private route: ActivatedRoute,
              private router :Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {  
          this.tasks = tasks;
        })
        this.listId = params['listId'];
    })
    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;      
    })
  }

  onTaskClick(task: Task){
    this.taskService.complete(task).subscribe(() => {
      console.log("Completed Successfult");
      
      task.completed = !task.completed
    })
  }

  deleteList(){
    this.taskService.deleteList(this.listId).subscribe(() => {
      this.lists = this.lists.filter(val => val._id !== this.listId);
    })
  }

  deleteTask(taskId: string){
    this.taskService.deleteTask(this.listId, taskId).subscribe(() => {
      this.tasks = this.tasks.filter(val => val._id !== taskId);
    })
  }

}
