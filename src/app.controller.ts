import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Products } from './model/Products';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getListProducts(): Promise<Products[]> {
    return this.appService.getProduct();
  }
  @Get(':id')
  getOne(@Param() param): Promise<Products> {
    return this.appService.getOne(param.id);
  }
  @Post()
  createProduct(@Body() body): Promise<Products> {
    return this.appService.createProduct(body);
  }
  @Put(':id')
  updateProduct(@Param() param, @Body() body): Promise<Products> {
    return this.appService.updateProduct(param.id, body);
  }
  @Delete(':id')
  destroyProduct(@Param() param): Promise<Products> {
    return this.appService.destroyProduct(param.id);
  }
}
