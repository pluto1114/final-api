import { BaseEntity } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("test", { schema: "final-api" })
export class Test extends BaseEntity {


  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("text", { name: "text", nullable: true })
  text: string | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("datetime", { name: "create_at", nullable: true })
  createAt: Date | null;

  @Column("datetime", { name: "update_at", nullable: true })
  updateAt: Date | null;
}
