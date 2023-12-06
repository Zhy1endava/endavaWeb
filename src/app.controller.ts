import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/public', 302) // This redirects to the /public route
  redirectToPublic() {
      // This method will redirect from the base URL to '/public'
    }
}
