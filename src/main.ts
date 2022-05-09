import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { swaggerConfig } from './configs/swagger.config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  // CORS
  app.enableCors();
  // Swagger
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  await app.listen(process.env.PORT || 3000);
};

bootstrap();
