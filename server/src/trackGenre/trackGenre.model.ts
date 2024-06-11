import {Column, DataType, Model, Table, BelongsTo, BelongsToMany} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {Track} from "../track/track.model";
import {TrackTrackGenre} from "../trackTrackGenre/TrackTrackGenre.model";

interface TrackGenreCreationAttrs {
    id: number;
    name: string;
}

@Table({tableName: 'track_genre'})
export class TrackGenre extends Model<TrackGenre, TrackGenreCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name: string;

    @BelongsToMany(()=>User,()=>UsersTrackGenre)
    user: User

    @BelongsToMany(()=>Track,()=>TrackTrackGenre)
    track: User
}