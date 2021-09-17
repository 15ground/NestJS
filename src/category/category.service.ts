import { Injectable } from '@nestjs/common';
import { Categories, categoriesSequelize } from 'src/model/Categories';

@Injectable()
export class CategoryService {
  constructor() {
    categoriesSequelize.sync();
  }
  getCategories(): Promise<Categories[]> {
    return categoriesSequelize.findAll().then((res) => {
      return res as Categories[];
    });
  }
  async createCategories(category: Categories): Promise<Categories> {
    const [categoryCreate] = await categoriesSequelize.upsert({
      ...category,
    });
    return categoryCreate as Categories;
  }
}
