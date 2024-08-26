/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';

@Injectable()

    export class AuthService{
        constructor(private  usersService: UsersService) {}

        async validateUser(email: string, password: string): Promise<any>{
            const user= await this.usersService.findByEmail(email);
            console.log('Email searched:', email);
  console.log('User found:', user);
            if(!user)
            {
                throw new UnauthorizedException("zły email")
            
            }
            const isPasswordValid= await bcrypt.compare(password, user.password)
            if(!isPasswordValid)
            {
                throw new UnauthorizedException("Nieprawidłowe hasło")
            }
            return user
        }
    }
