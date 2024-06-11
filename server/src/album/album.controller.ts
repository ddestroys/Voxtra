import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common';
import {jwtDecode} from "jwt-decode";
import {AlbumService} from "./album.service";

@Controller('album')
export class AlbumController {

    constructor(private albumService: AlbumService) {}
    /*
        @Post()
        create(@Body() userDto: CreateUserDto) {
            return this.usersService.createUser(userDto)
        }*/

    @Post('/add/:albumId')
    getAllHistoryTracks(@Headers('Authorization') auth: string, @Param('albumId') albumId: string) {
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.albumService.addAlbumToUser(+albumId, userId)
    }

    @Post('remove/:albumId')
    addTrackToPlaylist(@Headers('Authorization') auth: string, @Param('usersPlaylistId') usersPlaylistId: string, @Param('trackId') trackId: string) {
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.albumService.removeAlbumFromUser(+trackId, +userId)
    }
    /*
        @Get('/:email')
        getUserByEmail(@Param('email') email: string) {
            console.log('AAAAAAA', email)
            return this.usersService.getUserByEmail(email)
        }*/
}