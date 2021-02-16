import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private taskService: TaskService,
                private router: Router) { }

  ngOnInit(): void {
  }

  checkUser(username: string, password: string){
    this.taskService.checkUser(username, password).subscribe((user: any[]) => {
      if(user.length > 0 ){
        this.router.navigate(['/lists']);
      }
      else this.router.navigate(['/login']);
      
    })
  }
}
