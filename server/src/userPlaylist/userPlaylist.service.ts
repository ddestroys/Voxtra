import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {UserPlaylist} from "./userPlaylist.model";
import {CreateUserPlaylistDto} from "./dto/create-user-playlist.dto";
import {UserPlaylistTrack} from "../userPlaylistTrack/userPlaylistTrack.model";
import {TrackService} from "../track/track.service";
import {Comment} from "../track/comment.model";
import {UpdateUserPlaylistDto} from "./dto/update-user-playlist.dto";
import {User} from "../users/users.model";
import {CreateTrackDto} from "../track/dto/create-track.dto";
import {FileService, FileType} from "../file/file.service";

@Injectable()
export class UserPlaylistService {

    constructor(@InjectModel(UserPlaylist) private userPlaylistRepository: typeof UserPlaylist,
                private trackService: TrackService, @InjectModel(User) private userRepository: typeof User, private fileService: FileService) {}

    async createUserPlaylist({tracks, ...dto}: CreateUserPlaylistDto, userId: number) {
        const user = await this.userRepository.findOne({where: {id: userId}})
        const userPlaylist = await this.userPlaylistRepository.create({favourite: false,...dto})
        await userPlaylist.$add('user_playlist_tracks',tracks)
        await user.$add('playlists',userPlaylist.id)
        return user
    }

    async deleteUserPlaylist(usersPlaylistId: number) {
        const userPlaylist = await this.userPlaylistRepository.destroy({where: {id: usersPlaylistId}})
        return userPlaylist
    }

    async patchUserPlaylist(usersPlaylistId: number, dto: UpdateUserPlaylistDto) {
        const {name} = dto;
        //const userPlaylist = await this.getUsersPlaylist(usersPlaylistId)
       this.userPlaylistRepository.update({name}, {
           where: {id: usersPlaylistId}
       })
        //return userPlaylist
    }

    async getAllUsersPlaylists(userId: number) {
        return await this.userPlaylistRepository.findAll({where: {user_id: userId},include: ['user_playlist_tracks']})
    }

    async getUsersPlaylist(usersPlaylistId: number) {
        return await this.userPlaylistRepository.findOne({where: {id: usersPlaylistId}, include: {association: 'user_playlist_tracks', include: ['album', 'author']}, order: [['user_playlist_tracks','id', 'ASC']]})
    }

    async addTrackToPlaylist(usersPlaylistId: number, trackId: number) {
        const track = await this.trackService.getOne(trackId)
        const usersPlaylist = await this.getUsersPlaylist(usersPlaylistId)
        await usersPlaylist.$add('user_playlist_tracks',track.id)
        //usersPlaylist.user_playlist_tracks = [...usersPlaylist.user_playlist_tracks, track]
        return usersPlaylist
        //return this.userPlaylistRepository.findOne({where: {email}, include: {all: true}})
    }

    async removeTrackFromPlaylist(usersPlaylistId: number, trackId: number) {
        const track = await this.trackService.getOne(trackId)
        const usersPlaylist = await this.getUsersPlaylist(usersPlaylistId)
        await usersPlaylist.$remove('user_playlist_tracks',track.id)
        //usersPlaylist.user_playlist_tracks = [...usersPlaylist.user_playlist_tracks, track]
        return usersPlaylist
        //return this.userPlaylistRepository.findOne({where: {email}, include: {all: true}})
    }

    async patch(dto: CreateTrackDto, picture, usersPlaylistId) {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        console.log(picturePath, usersPlaylistId)
        // @ts-ignore
        const new1 = await this.userPlaylistRepository.update({
            ...(picturePath && {picture: picturePath}),
            ...dto
        }, {where: {id: usersPlaylistId}})

        return new1
    }
}