import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Headers,
    Patch,
    Delete,
    UseInterceptors,
    UploadedFiles
} from '@nestjs/common';
import {CreateUserPlaylistDto} from "./dto/create-user-playlist.dto";
import {UserPlaylistService} from "./userPlaylist.service";
import {UpdateUserPlaylistDto} from "./dto/update-user-playlist.dto";
import {jwtDecode} from "jwt-decode";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {CreateTrackDto} from "../track/dto/create-track.dto";

@Controller('user_playlist')
export class UserPlaylistController {

    constructor(private usersPlaylistService: UserPlaylistService) {}

    @Post()
    createUserPlaylist(@Headers('Authorization') auth: string, @Body() userDto: CreateUserPlaylistDto) {
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.usersPlaylistService.createUserPlaylist(userDto, userId)
    }

    // @Patch('/:usersPlaylistId')
    // patchUserPlaylist(@Param('usersPlaylistId') usersPlaylistId: string, @Body() userDto: UpdateUserPlaylistDto) {
    //     return this.usersPlaylistService.patchUserPlaylist(+usersPlaylistId, userDto)
    // }

    @Delete('/:usersPlaylistId')
    deleteUserPlaylist(@Param('usersPlaylistId') usersPlaylistId: string) {
        return this.usersPlaylistService.deleteUserPlaylist(+usersPlaylistId)
    }

    @Get()
    getAllUsersPlaylists(@Headers('Authorization') auth: string) {
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.usersPlaylistService.getAllUsersPlaylists(userId)
    }

    @Get('/:usersPlaylistId')
    getUsersPlaylist(@Param('usersPlaylistId') usersPlaylistId: string) {
        return this.usersPlaylistService.getUsersPlaylist(+usersPlaylistId)
    }

    @Post('/:usersPlaylistId/:trackId')
    addTrackToPlaylist(@Param('usersPlaylistId') usersPlaylistId: string, @Param('trackId') trackId: string) {
        return this.usersPlaylistService.addTrackToPlaylist(+usersPlaylistId, +trackId)
    }

    @Post('/remove/:usersPlaylistId/:trackId')
    removeTrackFromPlaylist(@Param('usersPlaylistId') usersPlaylistId: string, @Param('trackId') trackId: string) {
        return this.usersPlaylistService.removeTrackFromPlaylist(+usersPlaylistId, +trackId)
    }

    @Patch('/:usersPlaylistId')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    patch(@UploadedFiles() files,@Body() dto: CreateTrackDto, @Param('usersPlaylistId') usersPlaylistId: string) {
        const {picture, audio} = files

        console.log('BBBBBBBBBB', picture, usersPlaylistId)

        return this.usersPlaylistService.patch(dto, picture[0], usersPlaylistId)
    }

    /*@Get('/:email')
    getUserByEmail(@Param('email') email: string) {
        console.log('AAAAAAA', email)
        return this.usersService.getUserByEmail(email)
    }*/
}