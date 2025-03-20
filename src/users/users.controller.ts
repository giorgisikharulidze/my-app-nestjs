import { Controller,Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";


//  /users
@Controller('users')
export class UsersController{

    @Get()
    getUsers(){
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

    @Post()
    createUser(){
        const user={id: 3, name:'mery', age: 23, gender: 'female', isMarried: false};
        const usersService = new UsersService();
        usersService.CreateUser(user);
        
        return 'A new User Created';
    }

}