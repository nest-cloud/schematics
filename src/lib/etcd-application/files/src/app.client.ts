import { Get } from '@nestcloud/http';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppClient {
  @Get('https://api.github.com')
  getGithubApi() {
  }
}
