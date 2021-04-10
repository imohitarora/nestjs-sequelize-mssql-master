import { Inject, Injectable } from '@nestjs/common';
import { History } from './history.entity';

@Injectable()
export class HistoryService {
  constructor(@Inject('HISTORY_REPOSITORY') private historyRepository: typeof History) {}

  async findAll(): Promise<History[]> {
    return this.historyRepository.findAll<History>();
  }
  
  async save(history: History): Promise<History> {
    return await history.save();
  }
}
