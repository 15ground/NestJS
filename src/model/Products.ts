import { DataTypes, Model, UUIDV4 } from 'sequelize';
import { sequelizeConfig } from 'src/database/database.provider';
import { categoriesSequelize } from './Categories';

export class Products {
  id?: string;
  name?: string;
  images?: string;
  price?: number;
  description?: string;
  categoryId?: string;
}
export const productSequelize = sequelizeConfig.define<
  Model<Products>,
  Products
>('products', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  images: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // ,
  // categoryId: {
  //   type: DataTypes.UUID,
  //   allowNull: false,
  //   references: {
  //     model: 'categories',
  //   },
  // },
});
productSequelize.belongsTo(categoriesSequelize);
// Cách define model product sequelize config
// tự động sync product
