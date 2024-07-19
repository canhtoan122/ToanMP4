import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { createDecipheriv } from 'crypto';

@Injectable()
export class UsersRepository {
    
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>
    ){}
    async register(user:User){
      const {Email, Password, UserRole, PaymentCard, isPremeum, UserSettingID } = user;
      const saltOrRounds = 10;
      const hashPass = await bcrypt.hash(Password, saltOrRounds);
      const newUser = await this.userRepository.save({
          ...user,
          Password: hashPass,
      });
      return newUser;
    }
    async login(user: User) {
      const {Email, Password, UserRole, PaymentCard, isPremeum, UserSettingID } = user;
      const users = await this.userRepository.findOne({where:{Email}});
      const isMatch = await bcrypt.compare(Password, users.Password);
      return isMatch;
    }
}
