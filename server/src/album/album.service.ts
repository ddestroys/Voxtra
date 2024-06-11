import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";

import {User} from "../users/users.model";
import {Album} from "./album.model";

@Injectable()
export class AlbumService {

    constructor(@InjectModel(User) private usersRepository: typeof User, @InjectModel(Album) private albumRepository: typeof Album) {}

    async addAlbumToUser(albumId: number, userId: number) {
        const album = await this.albumRepository.findOne({where: {id: albumId}})
        let user = await this.usersRepository.findOne({where: {id: userId}, include: 'albums'})

        console.log(album)

        await user.$add('albums',album.id)
        //usersPlaylist.user_playlist_tracks = [...usersPlaylist.user_playlist_tracks, track]
        return user
        //return this.userPlaylistRepository.findOne({where: {email}, include: {all: true}})
    }

    async removeAlbumFromUser(albumId: number, userId: number) {
        let user = await this.usersRepository.findOne({where: {id: userId}, include: 'albums'})

        await user.$remove('albums',albumId)
        //usersPlaylist.user_playlist_tracks = [...usersPlaylist.user_playlist_tracks, track]
        return user
        //return this.userPlaylistRepository.findOne({where: {email}, include: {all: true}})
    }
}