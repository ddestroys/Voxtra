import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {UserPlaylist} from "../userPlaylist/userPlaylist.model";
import {Track} from "../track/track.model";
import {Album} from "../album/album.model";
import {User} from "../users/users.model";
import {UserAlbum} from "../userAlbum/userAlbum.model";
import {UserAuthor} from "../userAuthor/userAuthor.model";

interface AuthorCreationAttrs {
    username: string;
    email: string;
}

@Table({tableName: 'author'})
export class Author extends Model<Author,AuthorCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    username: string;

    @Column({type: DataType.STRING})
    email: string;

    @Column({type: DataType.STRING})
    genres: string;

    @Column({type: DataType.STRING})
    avatar: string;

    @HasMany(()=>Track)
    tracks: Track[]

    @HasMany(()=>Album)
    album: Album[]

    @BelongsToMany(()=>User,()=>UserAuthor)
    user: User
}