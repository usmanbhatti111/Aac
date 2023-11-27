import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SERVICES } from '@shared/constants';

import { UserAccountModule } from './app/user-account.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserAccountModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_HOST],
        queue: `${SERVICES.USER}_QUEUE`,
        queueOptions: {
          durable: false,
        },
      },
    }
  );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  await app.listen();
}
bootstrap();
