import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Comment} from "./comment.model";
import {User} from "../users/users.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {UserPlayedHistoryTrack} from "../userPlayedHistoryTrack/userPlayedHistoryTrack.model";
import {UserPlayedHistory} from "../userPlayedHistory/userPlayedHistory.model";
import {UserPlaylist} from "../userPlaylist/userPlaylist.model";
import {UserPlaylistTrack} from "../userPlaylistTrack/userPlaylistTrack.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {TrackTrackGenre} from "../trackTrackGenre/TrackTrackGenre.model";
import {Album} from "../album/album.model";
import {TrackAlbum} from "../trackAlbum/trackAlbum.model";
import {Author} from "../author/author.model";

@Table({tableName: 'tracks'})
export class Track extends Model<Track,{}> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING(10000)})
    text: string;

    @Column({type: DataType.BOOLEAN})
    approved: boolean;

    @Column({type: DataType.INTEGER})
    duration: number;

    @Column({type: DataType.BOOLEAN})
    liked: boolean;

    @Column({type: DataType.STRING})
    picture: number;

    @Column({type: DataType.STRING})
    audio: string;

    @BelongsToMany(()=>UserPlayedHistory,()=>UserPlayedHistoryTrack)
    user_played_history: UserPlayedHistory

    @BelongsToMany(()=>UserPlaylist,()=>UserPlaylistTrack)
    user_playlist: UserPlaylist

    @BelongsToMany(()=>TrackGenre,()=>TrackTrackGenre)
    track_genre: TrackGenre

    @ForeignKey(() => Album)
    @Column({type: DataType.INTEGER})
    album_id: number;

    @BelongsTo(()=>Album)
    album: Album

    @ForeignKey(() => Author)
    @Column({type: DataType.INTEGER})
    author_id: number;

    @BelongsTo(()=>Author)
    author: Author
}