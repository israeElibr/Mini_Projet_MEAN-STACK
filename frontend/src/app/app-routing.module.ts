import { RegisterComponent } from './pages/register/register.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { UpdateListComponent } from './pages/update-list/update-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';


const routes: Routes = [
  { path: 'new-list', component: NewListComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'lists', component: TaskViewComponent},
  { path: 'lists/:listId/new-task', component: NewTaskComponent },
  { path: 'lists/:listId/update-task/:taskId', component: UpdateTaskComponent},
  { path: 'lists/:listId/update-list', component: UpdateListComponent},
  { path: '', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
