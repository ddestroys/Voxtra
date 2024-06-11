import {Column, DataType, Model, Table, BelongsTo, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {Track} from "../track/track.model";
import {UserPlayedHistoryTrack} from "../userPlayedHistoryTrack/userPlayedHistoryTrack.model";

@Table({tableName: 'user_played_history'})
export class UserPlayedHistory extends Model<UserPlayedHistory> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @BelongsTo(()=>User)
    user: User

    @BelongsToMany(()=>Track,()=>UserPlayedHistoryTrack)
    tracks: Track[]
}