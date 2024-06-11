import {Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user-dto";
import {CreateTrackDto} from "../track/dto/create-track.dto";
import {Track} from "../track/track.model";
import {FileService, FileType} from "../file/file.service";
import {UserPlaylistService} from "../userPlaylist/userPlaylist.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private fileService: FileService,
                private userPlaylistService: UserPlaylistService) {}

    async createUser({favouriteGenres, ...dto}: CreateUserDto) {
        const user = await this.userRepository.create({subscription_type: "free", role: 'user' , ...dto})
        await user.$add('favourite_genres', favouriteGenres)
        await this.userPlaylistService.createUserPlaylist({
            tracks: [],
            name: 'Понравившиеся треки',
            favourite: true,
        }, user.id)
        return user
    }

    async patch(dto: CreateTrackDto, picture, userId) {
        //const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const picturePath = picture ? this.fileService.createFile(FileType.IMAGE, picture) : null
        //const track = await user.$set('avatar',picturePath)
        // @ts-ignore
        const new1 = await this.userRepository.update({
            ...(picturePath && {avatar: picturePath}),
            ...dto
        }, {where: {id: userId}})

        return new1
    }

    async removeFavouriteGenre(favouriteGenre: number, userId: number) {
        const user = await this.userRepository.findOne({where: {id: userId}})
        console.log(user)
        user?.$remove('favourite_genres', favouriteGenre)
        console.log(user)
        return user
    }

    async getAllUsers() {
        return await this.userRepository.findAll({include: 'favourite_genres'})
    }

    async getUserByEmail(email: string) {
        return this.userRepository.findOne({where: {email}, include: {all: true, nested: true}, order: [['playlists','id','ASC']]})
    }
}