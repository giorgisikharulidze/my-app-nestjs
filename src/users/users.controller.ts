import { Controller,Get } from "@nestjs/common";

//  /users
@Controller('users')
export class UsersController{

@Get()
Hello(): string {
return 'users';
}    
}