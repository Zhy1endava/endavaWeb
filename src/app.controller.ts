import {Controller, Get, Redirect} from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    @Redirect('/public', 302) // This redirects to the /public route
    redirectToPublic() {
        // This method will redirect from the base URL to '/public'
    }
}
