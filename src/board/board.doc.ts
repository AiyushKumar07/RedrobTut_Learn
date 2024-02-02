import { applyDecorators } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { CreateBoradResponse, ListBoardResponse } from './response';

export const BoardDocs = {
    getBoardList: applyDecorators(
        ApiOperation({
            summary: 'Get Board List API',
        }),
        ApiOkResponse({
            type: ListBoardResponse,
            isArray: true,
        }),
    ),

    createBoard: applyDecorators(
        ApiOperation({ summary: 'Create Board API' }),
        ApiCreatedResponse({
            type: CreateBoradResponse,
        }),
    ),
};