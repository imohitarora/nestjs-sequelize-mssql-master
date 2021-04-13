import { Table, Column, Model } from 'sequelize-typescript';
import { BaseEntity } from '../base/base.entity';

@Table({
  tableName: 'History',
  timestamps: false,
})
export class History extends BaseEntity {
  @Column
  EmployeeID: string;

  @Column
  RequestID: number;

  @Column
  DateStamp: Date;
}
