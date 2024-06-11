import {Column, DataType, Model, Table, BelongsTo, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";

@Table({tableName: 'users_track_genre'})
export class UsersTrackGenre extends Model<UsersTrackGenre> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=>User)
    user_id: number;

    @ForeignKey(()=>TrackGenre)
    track_genre_id: number
}