import { Module } from '@nestjs/common';
import { BootModule } from '@nestcloud/boot';
import { EtcdModule } from '@nestcloud/etcd';
import { ConfigModule } from '@nestcloud/config';
import { ServiceModule } from '@nestcloud/service';
import { LoadbalanceModule } from '@nestcloud/loadbalance';
import { HttpModule } from '@nestcloud/http';
import { BOOT, LOADBALANCE, ETCD } from '@nestcloud/common';
import { TerminusModule } from '@nestjs/terminus';
import { LoggerModule } from '@nestcloud/logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppClient } from './app.client';
import { resolve } from 'path';

@Module({
  imports: [
    LoggerModule.forRoot(),
    BootModule.forRoot({
      filePath: resolve(__dirname, '../config.yaml'),
    }),
    EtcdModule.forRootAsync({ inject: [BOOT] }),
    ConfigModule.forRootAsync({ inject: [BOOT, ETCD] }),
    ServiceModule.forRootAsync({ inject: [BOOT, ETCD] }),
    LoadbalanceModule.forRootAsync({ inject: [BOOT] }),
    HttpModule.forRootAsync({ inject: [LOADBALANCE] }),
    TerminusModule.forRootAsync({
      useFactory: () => ({
        endpoints: [{ url: '/health', healthIndicators: [] }],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppClient],
})
export class AppModule {
}
