import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBoardDto } from './dto';

@Injectable()
export class BoardService {

    constructor(private prisma: PrismaService) { }

    getBoardList() {
        return this.prisma.board.findMany({});
    }

    createBoard(dto: CreateBoardDto) {
        return this.prisma.board.create({
            data: {
                ...dto,
            },
        });
    }
}
