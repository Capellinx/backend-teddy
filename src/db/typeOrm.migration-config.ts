import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";
import { Costumer } from "../costumer/entities/costumer.entity";
import { Env, envSchema } from "../env";

ConfigModule.forRoot({
  isGlobal: true,
  validate: (env) => envSchema.parse(env),
})

const configService: ConfigService<Env, true> = new ConfigService();

const dataSourceOptions = new DataSource({
  type: "postgres",
  host: configService.get<string>("DB_HOST", { infer: true }),
  port: configService.get<number>("DB_PORT", {infer: true}),
  username: configService.get<string>("DB_USERNAME", {infer: true}),
  password: configService.get<string>("DB_PASSWORD", {infer: true}),
  database: configService.get<string>("DB_NAME", {infer: true}),
  entities: [Costumer],
  migrations: [__dirname + "/migrations/*.ts"],
  synchronize: false,
});

export default dataSourceOptions;
