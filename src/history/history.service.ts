import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { History } from './history.entity';

@Injectable()
export class HistoryService extends BaseService<History> {
  constructor(@Inject('HISTORY_REPOSITORY') private historyRepository: typeof History,
  ) {
    super(historyRepository);
  }
}
