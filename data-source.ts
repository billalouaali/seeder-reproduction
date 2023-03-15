import CreateDays from "./src/database/seeders/create-days.seeder";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'seeder',
  extra: {
    'charset': 'utf8mb4_unicode_ci'
  },
  logging: true,
  entities: [
    __dirname + '/**/*.entity{.ts,.js}'
  ],
  synchronize: true
}

export const dataSource = new DataSource(dataSourceOptions);
