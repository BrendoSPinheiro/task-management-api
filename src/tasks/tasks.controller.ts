import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  index(): Task[] {
    const tasks = this.tasksService.getAllTasks();

    return tasks;
  }

  @Get('/:id')
  show(@Param('id') id: string): Task {
    const task = this.tasksService.getTaskById(id);

    return task;
  }

  @Post()
  store(@Body() createTaskDto: CreateTaskDto): Task {
    const task = this.tasksService.createTask(createTaskDto);

    return task;
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string, 
    @Body('status') status: TaskStatus
  ): Task {
    const task = this.tasksService.updateTaskStatus(id, status);

    return task;
  }

  @Delete('/:id')
  delete(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}
