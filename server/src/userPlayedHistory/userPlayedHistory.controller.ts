import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common';
import {jwtDecode} from "jwt-decode";
import {UserPlayedHistoryService} from "./userPlayedHistory.service";

@Controller('user_played_history')
export class UserPlayedHistoryController {

    constructor(private usersPlayedHistoryService: UserPlayedHistoryService) {}
/*
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }*/

    @Get()
    getAllHistoryTracks(@Headers('Authorization') auth: string) {
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.usersPlayedHistoryService.getAllHistoryTracks(userId)
    }

    @Post('/:trackId')
    addTrackToPlaylist(@Headers('Authorization') auth: string, @Param('usersPlaylistId') usersPlaylistId: string, @Param('trackId') trackId: string) {
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        console.log(jwtDecode<{id: number}>(auth))
        return this.usersPlayedHistoryService.addTrackToHistory(+trackId, +userId)
    }

    @Post('/remove/:trackId')
    removeTrackToHistory(@Headers('Authorization') auth: string, @Param('usersPlaylistId') usersPlaylistId: string, @Param('trackId') trackId: string) {
        console.log(auth)
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.usersPlayedHistoryService.removeTrackToHistory(+trackId, +userId)
    }

    @Post('/all/remove')
    removeHistory(@Headers('Authorization') auth: string, @Param('usersPlaylistId') usersPlaylistId: string, @Param('trackId') trackId: string) {
        console.log(auth)
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.usersPlayedHistoryService.removeHistory(+trackId, +userId)
    }
/*
    @Get('/:email')
    getUserByEmail(@Param('email') email: string) {
        console.log('AAAAAAA', email)
        return this.usersService.getUserByEmail(email)
    }*/
}