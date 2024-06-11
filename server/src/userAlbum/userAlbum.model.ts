import {Column, DataType, Model, Table, BelongsTo, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {Track} from "../track/track.model";
import {Album} from "../album/album.model";

@Table({tableName: 'user_album'})
export class UserAlbum extends Model<UserAlbum> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.BOOLEAN})
    pinned: boolean;

    @ForeignKey(()=>User)
    user_id: number;

    @ForeignKey(()=>Album)
    album_id: number
}