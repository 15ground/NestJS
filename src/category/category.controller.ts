import { Body, Controller, Get, Post } from '@nestjs/common';
import { Categories } from 'src/model/Categories';
import { CategoryService } from './category.service';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly appService: CategoryService) {}
  // Get cate
  @Get()
  getlistCategories(): Promise<Categories[]> {
    return this.appService.getCategories();
  }
  @Post()
  createCategory(@Body() body): Promise<Categories> {
    return this.appService.createCategories(body);
  }
}
