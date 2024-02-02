import { ApiProperty } from '@nestjs/swagger';
import { Board } from '@prisma/client';

export class BoardDomain implements Board {
    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;
}