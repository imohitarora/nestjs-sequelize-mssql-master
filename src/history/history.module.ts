import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { DatabaseModule } from '../database/database.module';
import { historyProviders } from './history.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [HistoryController],
  providers: [HistoryService, ...historyProviders],
})
export class HistoryModule {}
