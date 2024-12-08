import { Column, PrimaryGeneratedColumn } from "typeorm";

interface IAdminProps {
  name: string,
  password: string,
}

export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ type: 'varchar', length: 255 })
  name: string;
  
  @Column({ type: 'varchar', length: 255 })
  password: string;
  
  constructor(props: IAdminProps) {
    Object.assign(this, props);
  }
}

