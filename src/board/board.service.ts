import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    async deleteBoard(title: string): Promise<void> {
        const existingBoard = await this.prisma.board.findFirst({
            where: { title }
        });
        if (existingBoard) {
            await this.prisma.board.deleteMany({
                where: { title },
            });
            throw new HttpException('Board Deleted Successfully..!!', HttpStatus.OK)
        } else {
            throw new HttpException('Board with specified title does not exist', HttpStatus.BAD_REQUEST);
        }
    }
}
