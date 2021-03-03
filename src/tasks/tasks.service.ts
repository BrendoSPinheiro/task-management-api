import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: uuid(),
      title: 'Estudar NestJS',
      description: 'Preciso estudar nest e ser foda com esse framework',
      status: TaskStatus.OPEN,
    }
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask({ title, description }: CreateTaskDto): Task {
    const newTask: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    }

    this.tasks.push(newTask);

    return newTask;
  }
}
