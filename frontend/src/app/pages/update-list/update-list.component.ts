import { List } from './../../models/list.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit {

  listId: string;

  constructor(private taskService: TaskService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
      }
    )
  }

  updateList(title: string){
    this.taskService.updateList(title, this.listId).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }

}
