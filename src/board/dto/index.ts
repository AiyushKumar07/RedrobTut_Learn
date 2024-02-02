import { PickType } from '@nestjs/swagger';
import { BoardDomain } from '../../../domain';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBoardDto extends PickType(BoardDomain, [
    'title',
    'content',
]) {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}