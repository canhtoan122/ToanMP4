import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './database/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService){}
    @Post("register")
    register(@Body() user:User){
        return this.usersService.register(user);
    }
    @Post("login")
    login(@Body() user:User){
        return this.usersService.login(user);
    }
}
