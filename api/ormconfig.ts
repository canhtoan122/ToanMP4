/* eslint-disable @typescript-eslint/no-var-requires */
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const config: MysqlConnectionOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT ||3306,
  username: process.env.DB_USERNAME || 'root',
  password: "",
  type: 'mysql',
  database: process.env.DB_NAME || 'toanmp4',
  entities: [__dirname + '/**/**/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;