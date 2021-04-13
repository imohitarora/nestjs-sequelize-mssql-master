import { Model } from "sequelize-typescript";

export interface IBaseService<T extends Model> {
  findAll(): Promise<T[]>;
  findOne(id: number): Promise<T>;
  update(id: number, entity: T): Promise<T>;
  save(entity: T): Promise<T>;
  delete(id: number);
}
