/* eslint-disable prettier/prettier */
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document} from 'mongoose';


@Schema()
export class Lesson extends Document{
    
    @Prop({required:true})
    tutorName: string;

    @Prop({required:true})
    subject: string;

    @Prop({required:true})
    platform:string;

    @Prop({required:true})
    studentName: string;

    @Prop({required:true})
    bookingDate: Date;

    @Prop({default: Date.now})
    createdAt: Date;

    @Prop({default: Date.now})
    updatedAt: Date
}

export const lessonSchema= SchemaFactory.createForClass(Lesson)