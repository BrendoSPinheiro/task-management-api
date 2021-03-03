import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Estudar NestJS',
      description: 'Preciso estudar nest e ser foda com esse framework',
      status: TaskStatus.OPEN,
    }
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
