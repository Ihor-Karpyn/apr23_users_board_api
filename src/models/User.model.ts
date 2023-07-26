import {
  AllowNull, BelongsTo,
  Column,
  DataType, ForeignKey,
  Model,
  Table,
  Unique
} from 'sequelize-typescript';
import { Color } from './Color.model';

@Table({
  tableName: 'users'
})

export class User extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
  name: string;

  @AllowNull(false)
  @ForeignKey(() => Color)
  @Column({
    type: DataType.INTEGER,
    field: 'car_color_id',
  })
  carColorId: number;

  @BelongsTo(() => Color)
  color: Color | null;
}
