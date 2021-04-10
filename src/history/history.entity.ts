import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'History',
  timestamps: false,
})
export class History extends Model {
  @Column
  EmployeeID: string;

  @Column
  RequestID: number;

  @Column
  DateStamp: Date;
}
