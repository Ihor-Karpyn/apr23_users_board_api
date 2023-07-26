import {
  Column,
  Model,
  DataType,
  Unique,
  AllowNull, Table
} from 'sequelize-typescript';

@Table({
  tableName: 'colors'
})

export class Color extends Model {
  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING
  })
  name: string;
}
