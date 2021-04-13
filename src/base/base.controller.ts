import {
  Body,
  Delete,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { IBaseService } from './ibase.service';

export class BaseController<T extends Model> {
  constructor(private readonly _IBaseService: IBaseService<T>) {}

  @Get('/')
  async getAll(@Res() res): Promise<T[]> {
    try {
      const results: T[] = await this._IBaseService.findAll();
      return res.status(HttpStatus.OK).json(results);
    } catch (error) {
      Logger.log(error, 'BaseController');
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Error. Please try again later.',
      });
    }
  }

  @Get('/:id')
  async getOne(@Res() res, @Param('id') id: number): Promise<T> {
    try {
      const result: T = await this._IBaseService.findOne(id);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      Logger.log(error, 'BaseController');
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Error. Please check the ID, and try again later.',
      });
    }
  }

  @Post('/')
  async post(@Res() res, @Body() entity: T): Promise<T> {
    try {
      const result: T = await this._IBaseService.save(entity);
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      Logger.log(error, 'BaseController');
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error. Please check the BODY request, and try again later.',
      });
    }
  }

  @Put('/:id')
  async put(
    @Res() res,
    @Body() entity: T,
    @Param('id') id: number,
  ): Promise<T> {
    try {
      const result: T = await this._IBaseService.update(id, entity);
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      Logger.log(error, 'BaseController');
      return res.status(HttpStatus.BAD_REQUEST).json({
        message:
          'Error. Please check the ID or BODY request, and try again later.',
      });
    }
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: number) {
    try {
      this._IBaseService.delete(id);
      return res.status(HttpStatus.NO_CONTENT).json();
    } catch (error) {
      Logger.log(error, 'BaseController');
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error. Please check the ID, and try again later.',
      });
    }
  }
}
