import { Model, Column, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

export abstract class BaseEntity extends Model {
  @Column
  active!: boolean;
}
