
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
// import {hostname} from 'os'; 
// import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());
  await app.listen(3002);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();