import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppClient } from './app.client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appClient: AppClient,
  ) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/github')
  getGithub() {
    return this.appClient.getGithubApi();
  }
}
