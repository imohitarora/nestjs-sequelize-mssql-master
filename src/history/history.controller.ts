import { Body, Controller, Get, Post } from '@nestjs/common';
import { History } from './history.entity';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly _service: HistoryService) {}

  @Get()
  findAll() {
    return this._service.findAll();
  }

  @Post()
  save(@Body() payload: History) {
    const person = History.build(payload);
    return this._service.save(person);
  }
}
