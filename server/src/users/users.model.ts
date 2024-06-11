import {Column, DataType, Model, Table, HasMany, BelongsToMany, BelongsTo, HasOne} from "sequelize-typescript";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {UserPlaylist} from "../userPlaylist/userPlaylist.model";
import {UserPlayedHistory} from "../userPlayedHistory/userPlayedHistory.model";
import {UserAlbum} from "../userAlbum/userAlbum.model";
import {Album} from "../album/album.model";
import {Author} from "../author/author.model";
import {UserAuthor} from "../userAuthor/userAuthor.model";

interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    username: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.STRING})
    role: string;

    @Column({type: DataType.STRING})
    subscription_type: string;

    @Column({type: DataType.STRING})
    quality: string;

    @Column({type: DataType.STRING})
    language: string;

    @Column({type: DataType.STRING})
    region: string;

    @Column({type: DataType.STRING})
    theme: string;

    @Column({type: DataType.STRING})
    sex: string;

    @Column({type: DataType.DATE})
    birth_date: string;

    @Column({type: DataType.STRING})
    avatar: string;

    @BelongsToMany(()=>TrackGenre,()=>UsersTrackGenre)
    favourite_genres: TrackGenre[]

    @HasMany(()=>UserPlaylist)
    playlists: UserPlaylist[]

    @HasOne(()=>UserPlayedHistory)
    user_played_history: UserPlayedHistory[]

    @BelongsToMany(()=> Album, ()=>UserAlbum)
    albums: UserAlbum[]

    @BelongsToMany(()=> Author, ()=>UserAuthor)
    authors: UserAuthor[]
}