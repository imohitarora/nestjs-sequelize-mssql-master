import {
  BadGatewayException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Model, Repository } from 'sequelize-typescript';
import { IBaseService } from './ibase.service';

@Injectable()
export class BaseService<T extends Model> implements IBaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  findAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.findAll();
    } catch (error) {
      Logger.log(error, 'BaseService');
      throw new BadGatewayException(error);
    }
  }

  findOne(id: number): Promise<T> {
    try {
      return <Promise<T>>this.genericRepository.findOne({ where: { id: id } });
    } catch (error) {
      Logger.log(error, 'BaseService');
      throw new BadGatewayException(error);
    }
  }

  update(id: number, entity: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  save(entity: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
}
