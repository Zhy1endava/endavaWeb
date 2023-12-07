import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockController } from './mock/mock.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // The 'public' directory will contain your index.html
    }),
  ],
  controllers: [AppController, MockController],
  providers: [AppService],
})
export class AppModule {}