import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  lisId: string;
  
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.lisId = params['listId'];
      }
    )
  }

  createTask(title: string){
    this.taskService.createTask(title, this.lisId).subscribe((newTask) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }



}
