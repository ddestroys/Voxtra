import {Body, Controller, Get, Headers, Param, Patch, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user-dto";
import {UsersService} from "./users.service";
import {jwtDecode} from "jwt-decode";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {CreateTrackDto} from "../track/dto/create-track.dto";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Patch()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    patch(@UploadedFiles() files,@Body() dto: CreateTrackDto, @Headers('Authorization') auth: string) {
        const {picture, audio} = files || {}
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.usersService.patch(dto, picture?.[0], userId)
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @Get('/:email')
    getUserByEmail(@Param('email') email: string) {
        console.log('AAAAAAA', email)
        return this.usersService.getUserByEmail(email)
    }

    @Post('/remove_genre/:id')
    removeGenre(@Param('id') id:string,@Headers('Authorization') auth: string) {
        const {id: userId=0} = jwtDecode<{id: number}>(auth)
        return this.usersService.removeFavouriteGenre(+id, userId)
    }
}