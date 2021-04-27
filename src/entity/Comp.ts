import { BaseEntity } from "typeorm";
import { Column, Entity } from "typeorm";

@Entity("comp", { schema: "final-api" })
export class Comp extends BaseEntity {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "compName", nullable: true, length: 255 })
  compName: string | null;

  @Column("int", { name: "personNum", nullable: true })
  personNum: number | null;

  @Column("datetime", { name: "createtime", nullable: true })
  createtime: Date | null;
}
