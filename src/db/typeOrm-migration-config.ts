import { ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { Env } from "../env";

const configService: ConfigService<Env, true> = new ConfigService()

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  url: 'postgresql://capella:postgres@localhost:5432/teddy',
  entities: [],
  migrations: [__dirname + "/migrations/*.ts"],
  synchronize: false
}

export default dataSourceOptions