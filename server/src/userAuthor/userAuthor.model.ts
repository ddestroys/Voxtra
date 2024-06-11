import {Column, DataType, Model, Table, BelongsTo, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Author} from "../author/author.model";

@Table({tableName: 'user_author'})
export class UserAuthor extends Model<UserAuthor> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.BOOLEAN})
    pinned: boolean;

    @ForeignKey(()=>User)
    user_id: number;

    @ForeignKey(()=>Author)
    author_id: number
}