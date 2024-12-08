import { randomUUID } from "node:crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface ICostumerProps {
  name: string;
  salary: number;
  company: number;
}

@Entity({ name: "costumers" })
export class Costumer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "integer" })
  salary: number;

  @Column({ type: "integer" })
  company: number;
  
  @Column({ type: "boolean" })
  is_selected: boolean;

  @Column({ type: "timestamp" })
  created_at: Date;

  constructor(props: ICostumerProps, id?: string) {
    this.id = id ?? randomUUID();
    Object.assign(this, props);
  }
}
