/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  age: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  role: string;

  @Prop({required: true})
  password: string


}

export const UserSchema = SchemaFactory.createForClass(User);