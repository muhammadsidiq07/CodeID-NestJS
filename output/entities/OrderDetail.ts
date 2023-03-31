import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders";
import { Product } from "./Product";

@Index("order_detail_pkey", ["orderDetailId"], { unique: true })
@Entity("order_detail", { schema: "public" })
export class OrderDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "order_detail_id" })
  orderDetailId: number;

  @Column("integer", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("timestamp without time zone", { name: "createdat", nullable: true })
  createdat: Date | null;

  @Column("timestamp without time zone", { name: "updatedat", nullable: true })
  updatedat: Date | null;

  @ManyToOne(() => Orders, (orders) => orders.orderDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "orderId" }])
  order: Orders;

  @ManyToOne(() => Product, (product) => product.orderDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Product;
}
