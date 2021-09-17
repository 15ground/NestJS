import { Injectable } from '@nestjs/common';
import { Categories, categoriesSequelize } from './model/Categories';
import { Products, productSequelize } from './model/Products';

@Injectable()
export class AppService {
  constructor() {
    productSequelize.sync();
  }

  getProduct(): Promise<Products[]> {
    return productSequelize
      .findAll({
        include: categoriesSequelize,
      })
      .then((res) => {
        return res as Products[];
      });
  }

  async getOne(id: string): Promise<Products> {
    const productUpdate = await productSequelize.findOne({
      where: {
        id,
      },
    });
    return productUpdate as Products;
  }
  async createProduct(product: Products): Promise<Products> {
    const [productCreate] = await productSequelize.upsert({
      ...product,
    });
    return productCreate as Products;
  }
  async updateProduct(id: string, product: Products): Promise<Products> {
    await productSequelize.update(
      { ...product },
      {
        where: {
          id,
        },
      },
    );
    const newProduct = this.getOne(id);
    return newProduct as Products;
  }
  async destroyProduct(id: string): Promise<Products> {
    const product = this.getOne(id);
    await productSequelize.destroy({
      where: {
        id,
      },
    });
    return product as Products;
  }
}
