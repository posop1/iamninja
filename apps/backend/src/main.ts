import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: true,
    methods: 'GET,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.setGlobalPrefix('/api');

  console.log(process.env.APP_PORT);

  const PORT = configService.get('APP_PORT');

  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
