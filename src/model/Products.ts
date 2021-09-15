import {
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

@Table({
  tableName: 'products',
  timestamps: false,
})
export class Products extends Model<Products> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
  })
  id?: string;
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name?: string;
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  images?: string;
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price?: number;
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description?: string;
}
