import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface IAdminProps {
  name: string;
  password: string;
}

@Entity({ name: "admins" })
export class Admin {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column()
  password: string;

  constructor(props: IAdminProps) {
    Object.assign(this, props);
  }
}
