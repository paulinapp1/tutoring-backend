/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from 'src/dtos/AuthDTO';

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post()
    async create(@Body() authDto: AuthDTO){
        return this.authService.validateUser (authDto.email,authDto.password)
    }
}