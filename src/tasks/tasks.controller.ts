import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  index(): Task[] {
    const tasks = this.tasksService.getAllTasks();

    return tasks;
  }

  @Post()
  store(@Body() { title, description }: CreateTaskDto): Task {
    const task = this.tasksService.createTask({title, description});

    return task;
  }
}
