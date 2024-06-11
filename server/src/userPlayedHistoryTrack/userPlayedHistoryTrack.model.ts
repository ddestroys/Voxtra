import {Column, DataType, Model, Table, BelongsTo, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {Track} from "../track/track.model";
import {UserPlayedHistory} from "../userPlayedHistory/userPlayedHistory.model";

@Table({tableName: 'user_played_history_track'})
export class UserPlayedHistoryTrack extends Model<UserPlayedHistoryTrack> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=>UserPlayedHistory)
    user_played_history_id: number;

    @ForeignKey(()=>Track)
    track_id: number
}