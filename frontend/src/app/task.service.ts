import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService ) { }

  createList(title: string){
    return this.webRequestService.post('lists', { title });
  }

  getLists(){
    return this.webRequestService.get('lists');
  }

  getTasks(listId: string){
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string){
    return this.webRequestService.post(`lists/${listId}/tasks`, {title});
  }

  updateList(title: string, listId: string){
    return this.webRequestService.patch(`lists/${listId}`, {title});
  }

  updateTask(listId: string, taskId: string, title: string){
    return this.webRequestService.patch(`lists/${listId}/tasks/${taskId}`, { title});
  }

  deleteList(listId: string){
    return this.webRequestService.delete(`lists/${listId}`);
  }

  deleteTask(listId: string, taskId: string){
    return this.webRequestService.delete(`lists/${listId}/tasks/${taskId}`)
  }

  complete(task: Task){
    return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }

  checkUser(username: string, password: string){
    return this.webRequestService.get(`users/${username}/${password}`);
  }

  register(username: string, password: string){
    return this.webRequestService.post(`users`, { username, password });
  }
}
