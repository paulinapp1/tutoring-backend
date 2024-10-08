/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { User, UserSchema } from './users.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
