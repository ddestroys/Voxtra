import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateGenreDto} from "./dto/create-genre.dto";
import {TrackGenre} from "./trackGenre.model";

@Injectable()
export class TrackGenreService {

    constructor(@InjectModel(TrackGenre) private trackGenreRepository: typeof TrackGenre) {}

    async createTrackGenres(dto: CreateGenreDto[]) {
        const genre = await this.trackGenreRepository.bulkCreate(dto)
        return genre
    }

    async createTrackGenre(dto: CreateGenreDto) {
        const genre = await this.trackGenreRepository.create(dto)
        return genre
    }

    async getAllGenres() {
        return await this.trackGenreRepository.findAll()
    }

    /*async addGenresToUser() {
        const track = await this.trackService.getOne(trackId)
        const usersPlaylist = await this.getUsersPlaylist(usersPlaylistId)
        await usersPlaylist.$add('user_playlist_tracks',track.id)
        //usersPlaylist.user_playlist_tracks = [...usersPlaylist.user_playlist_tracks, track]
        return usersPlaylist
        //return this.userPlaylistRepository.findOne({where: {email}, include: {all: true}})
    }*/
}