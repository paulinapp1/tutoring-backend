/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User} from './users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: any): Promise<User> {
    const existingEmail = await this.findByEmail(createUserDto.email)
    if (existingEmail){
      throw new Error('Email jest juz zarejestrowany');
    }
     const SaltRounds= 15;
     const hashedPassword= await bcrypt.hash(createUserDto.password, SaltRounds)
     
    const createdUser = new this.userModel({createUserDto, password: hashedPassword,name: createUserDto.name,
      email: createUserDto.email,
      role: createUserDto.role,
      age: createUserDto.age});
    
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  
  async findByEmail(email: string): Promise<User |null>
  {
    return this.userModel.findOne({email}).exec();
  }
}
