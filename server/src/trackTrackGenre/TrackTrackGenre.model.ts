import {Column, DataType, Model, Table, BelongsTo, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {Track} from "../track/track.model";

@Table({tableName: 'track_track_genre'})
export class TrackTrackGenre extends Model<TrackTrackGenre> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=>Track)
    track_id: number;

    @ForeignKey(()=>TrackGenre)
    track_genre_id: number
}