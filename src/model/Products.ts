import { DataTypes, Model, UUIDV4 } from 'sequelize';
import { sequelizeConfig } from 'src/database/database.provider';

export class Products {
  id?: string;
  name?: string;
  images?: string;
  price?: number;
  description?: string;
}

export const productSequelize = sequelizeConfig.define<
  Model<Products>,
  Products
>('products', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
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
});

// Cách define model product sequelize config
// tự động sync product
