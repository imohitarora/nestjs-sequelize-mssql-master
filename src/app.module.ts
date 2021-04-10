import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [DatabaseModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
