import {BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Track} from "../track/track.model";
import {Album} from "../album/album.model";


@Table({tableName: 'track_album'})
export class TrackAlbum extends Model<TrackAlbum,{}> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=>Track)
    track_id: number;

    @ForeignKey(()=>Album)
    album_id: number
}