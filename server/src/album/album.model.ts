import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {TrackAlbum} from "../trackAlbum/trackAlbum.model";
import {Track} from "../track/track.model";
import {Author} from "../author/author.model";
import {User} from "../users/users.model";
import {UserAlbum} from "../userAlbum/userAlbum.model";
import {UserPlaylist} from "../userPlaylist/userPlaylist.model";

interface AlbumCreationAttrs {
    username: string;
    email: string;
    password: string;
}

@Table({tableName: 'album'})
export class Album extends Model<Album,AlbumCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

/*    @BelongsToMany(()=>Track,()=>TrackAlbum)
    track: Track*/

    @ForeignKey(() => Author)
    @Column({type: DataType.INTEGER})
    author_id: number;

    @BelongsTo(()=>Author)
    author: Author

    @HasMany(()=>Track)
    tracks: Track[]

    @BelongsToMany(()=>User,()=>UserAlbum)
    user: User
}