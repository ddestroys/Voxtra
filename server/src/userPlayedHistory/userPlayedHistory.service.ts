import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {UserPlayedHistory} from "./userPlayedHistory.model";
import {TrackService} from "../track/track.service";
import {CreateUserPlaylistDto} from "../userPlaylist/dto/create-user-playlist.dto";
import {CreateUserPlayedHistoryDto} from "./dto/create-user-history.dto";

@Injectable()
export class UserPlayedHistoryService {

    constructor(@InjectModel(UserPlayedHistory) private userPlayedHistoryRepository: typeof UserPlayedHistory,  private trackService: TrackService) {}

    async getAllHistoryTracks(userId: number) {
        return await this.userPlayedHistoryRepository.findAll({include: {all: true, nested: true}, where: {user_id: userId}})
    }

    async addTrackToHistory(trackId: number, userId: number) {
        const track = await this.trackService.getOne(trackId)
        let usersPlayedHistory = await this.userPlayedHistoryRepository.findOne({where: {user_id: userId}, include: 'tracks'})
        if(!usersPlayedHistory) {
            usersPlayedHistory = await this.createUserPlayedHistory({user_id: userId})
        }
        await usersPlayedHistory.$add('tracks',track.id)
        //usersPlaylist.user_playlist_tracks = [...usersPlaylist.user_playlist_tracks, track]
        return usersPlayedHistory
        //return this.userPlaylistRepository.findOne({where: {email}, include: {all: true}})
    }

    async removeTrackToHistory(trackId: number, userId: number) {
        const track = await this.trackService.getOne(trackId)
        let usersPlayedHistory = await this.userPlayedHistoryRepository.findOne({where: {user_id: userId}, include: 'tracks'})
        await usersPlayedHistory.$remove('tracks',track.id)
        //usersPlaylist.user_playlist_tracks = [...usersPlaylist.user_playlist_tracks, track]
        return usersPlayedHistory
        //return this.userPlaylistRepository.findOne({where: {email}, include: {all: true}})
    }

    async removeHistory(trackId: number, userId: number) {
        let usersPlayedHistory = await this.userPlayedHistoryRepository.findOne({where: {user_id: userId}, include: 'tracks'})
        await usersPlayedHistory.destroy()
        //usersPlaylist.user_playlist_tracks = [...usersPlaylist.user_playlist_tracks, track]
        return usersPlayedHistory
        //return this.userPlaylistRepository.findOne({where: {email}, include: {all: true}})
    }

    async createUserPlayedHistory(dto: CreateUserPlayedHistoryDto) {
        const userPlaylist = await this.userPlayedHistoryRepository.create(dto)
        return userPlaylist
    }
}