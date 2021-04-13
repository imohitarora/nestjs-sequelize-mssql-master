import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { History } from './history.entity';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController extends BaseController<History> {
  constructor(private readonly _service: HistoryService) {
    super(_service);
  }
}
