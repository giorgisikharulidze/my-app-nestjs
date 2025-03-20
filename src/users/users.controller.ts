import { Controller,Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";


//  /users
@Controller('users')
export class UsersController{

    @Get()
    getUsers(@Query() query: any){
        const usersService = new UsersService();
        if(query.gender){
            return usersService.getAllUsers().filter(u=> u.gender === query.gender);
        }
        return usersService.getAllUsers();
        
    }

    @Get(':id')
    getUserById(@Param('id') id: any){
     const userService = new UsersService();
     return userService.getUserById(+id);   
    }

    @Post()
    createUser(){
        const user={id: 3, name:'mery', age: 23, gender: 'female', isMarried: false};
        const usersService = new UsersService();
        usersService.CreateUser(user);
        
        return 'A new User Created';
    }

}