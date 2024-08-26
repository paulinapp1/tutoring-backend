/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthDTO{
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password:string;


}