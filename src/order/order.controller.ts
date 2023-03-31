import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { Users } from 'output/entities/Users';
import { OrderService } from 'src/order/order.service';

@Controller('order')
export class OrderController {
  constructor(private Service: OrderService) {}

  @Get()
  public async getAll() {
    return await this.Service.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Service.findOne(id);
  }
  @Post()
  public async Create(
    @Body('orderId') orderId,
    @Body('totalproduct') totalproduct: number,
    @Body('totalprice') totalprice: string,
    @Body('createdat') createdat: Date,
    @Body('updatedat') updatedat: Date,
    @Body('userId') user,
  ) {
    return await this.Service.Create(
      orderId,
      totalproduct,
      totalprice,
      createdat,
      updatedat,
      user,
    );
  }
  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('totalproduct') totalproduct: number,
    @Body('totalprice') totalprice: string,
    @Body('userId') user,
  ) {
    return await this.Service.Update(id, totalproduct, totalprice, user);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Service.Delete(id);
  }
}
