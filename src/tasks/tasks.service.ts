import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

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

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    return task;
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

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const updatedTask = this.tasks.find((task) => task.id === id);

    updatedTask.status = status;

    return updatedTask;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
