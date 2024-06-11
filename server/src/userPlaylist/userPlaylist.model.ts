import {Column, DataType, Model, Table, BelongsTo, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Track} from "../track/track.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {UserPlaylistTrack} from "../userPlaylistTrack/userPlaylistTrack.model";

interface UserPlaylistCreationAttrs {
    name: string;
}

@Table({tableName: 'user_playlist'})
export class UserPlaylist extends Model<UserPlaylist, UserPlaylistCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name: string;

    @Column({type: DataType.BOOLEAN})
    favourite: boolean;

    @Column({type: DataType.STRING})
    picture: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @BelongsTo(()=>User)
    user: User

    @BelongsToMany(()=>Track,() => UserPlaylistTrack)
    user_playlist_tracks: Track[]
}