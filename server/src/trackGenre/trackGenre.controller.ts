import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TrackGenreService} from "./trackGenre.service";
import {CreateGenreDto} from "./dto/create-genre.dto";

@Controller('track_genre')
export class TrackGenreController {

    constructor(private trackGenreService: TrackGenreService) {}

    @Post()
    create(@Body() userDto: CreateGenreDto) {
        return this.trackGenreService.createTrackGenre(userDto)
    }

    @Get()
    getAll() {
        return this.trackGenreService.getAllGenres()
    }

    /*@Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @Get('/:email')
    getUserByEmail(@Param('email') email: string) {
        console.log('AAAAAAA', email)
        return this.usersService.getUserByEmail(email)
    }*/
}