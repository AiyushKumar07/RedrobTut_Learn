import { applyDecorators } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { CreateBoradResponse, DeleteBoardResponse, ListBoardResponse } from './response';

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
            description: 'Board Created.. Sucessfully ..!!'
        }),
    ),

    deleteBoard: applyDecorators(
        ApiOperation({ summary: 'Delete Board API' }),
        ApiOkResponse({
            type: DeleteBoardResponse,
            description: 'Board deleted successfully',
        }),
        ApiBadRequestResponse({
            description: 'Bad Request'
        })
    )


};