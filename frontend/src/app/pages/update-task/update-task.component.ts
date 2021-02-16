import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

  taskId: string;
  listId: string;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params.taskId;
        this.listId = params.listId;
      }
    )
  }
  
  updatetask(title: string){
    this.taskService.updateTask(this.listId, this.taskId, title).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  }

}
