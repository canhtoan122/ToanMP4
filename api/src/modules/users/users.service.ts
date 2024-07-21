import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './database/user.entity';

@Injectable()
export class UsersService {
    constructor(
        private userRepository : UsersRepository
    ){
        
    }
    register(user:User){
        const users = this.userRepository.register(user);
        return users;
    }
    login(user:User){
        const users = this.userRepository.login(user);
        return users;
    }
    getUser(){
        const users = this.userRepository.getUsers();
        return users;
    }
}
