import { BaseEntity } from "typeorm";
import { Column, Entity } from "typeorm";

@Entity("fa_entity", { schema: "final-api" })
export class FaEntity extends BaseEntity {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "entityName", nullable: true, length: 255 })
  entityName: string | null;

  @Column("int", { name: "gene", nullable: true })
  gene: number | null;

  @Column("datetime", { name: "createtime", nullable: true })
  createtime: Date | null;
}
