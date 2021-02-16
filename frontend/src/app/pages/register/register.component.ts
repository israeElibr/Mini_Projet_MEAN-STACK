import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private taskService: TaskService, 
                private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(username: string, password: string){
    this.taskService.register(username, password).subscribe((newUser) => {
      this.router.navigate(['/login']);
    })
  }

}
