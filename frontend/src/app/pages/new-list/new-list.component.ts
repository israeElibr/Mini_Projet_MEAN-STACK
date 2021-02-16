import { List } from './../../models/list.model';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private route: Router) { }

  ngOnInit(): void {
  }

  createList(title: string){
    this.taskService.createList(title).subscribe((List: List) => {
      this.route.navigate(['/lists', List._id]);
    });
  }

}
