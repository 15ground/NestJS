import { sequelizeConfig } from 'src/database/database.provider';
import { DataTypes, Model, UUIDV4 } from 'sequelize';
import { productSequelize } from './Products';

export class Categories {
  id?: string;
  name?: string;
}
export const categoriesSequelize = sequelizeConfig.define<
  Model<Categories>,
  Categories
>('categories', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});
