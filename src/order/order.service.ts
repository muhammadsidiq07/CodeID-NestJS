import { Injectable } from '@nestjs/common';
import { Orders } from 'output/entities/Orders';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'output/entities/Users';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders) private serviceRepo: Repository<Orders>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      relations: {
        user: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { orderId: id },
      relations: {
        user: true,
      },
    });
  }

  public async Create(
    orderId,
    totalproduct: number,
    totalprice: string,
    createdat: Date = new Date(),
    updatedat: Date = new Date(),
    user,
  ) {
    try {
      const order = await this.serviceRepo.save({
        orderId: orderId,
        totalproduct: totalproduct,
        totalprice: totalprice,
        createdat: createdat,
        updatedat: updatedat,
        user: user,
      });
      return order;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    totalproduct: number,
    totalprice: string,
    user,
  ) {
    try {
      const order = await this.serviceRepo.update(id, {
        totalproduct: totalproduct,
        totalprice: totalprice,
        user: user,
      });
      return order;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const order = await this.serviceRepo.delete(id);
      return order;
    } catch (error) {
      return error.message;
    }
  }
}
