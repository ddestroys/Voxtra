import {Column, DataType, Model, Table, BelongsTo, BelongsToMany, ForeignKey, HasMany} from "sequelize-typescript";
import {User} from "../users/users.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {Track} from "../track/track.model";
import {UserPlayedHistory} from "../userPlayedHistory/userPlayedHistory.model";
import {UserPlaylist} from "../userPlaylist/userPlaylist.model";

@Table({tableName: 'user_playlist_track'})
export class UserPlaylistTrack extends Model<UserPlaylistTrack> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=>UserPlaylist)
    user_playlist_id: number;

    @ForeignKey(()=>Track)
    track_id: number
}