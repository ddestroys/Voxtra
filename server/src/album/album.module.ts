import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {Album} from "./album.model";
import {Track} from "../track/track.model";
import {Author} from "../author/author.model";
import {AlbumService} from "./album.service";
import {UsersModule} from "../users/users.module";
import {AlbumController} from "./album.controller";
import {UserAlbum} from "../userAlbum/userAlbum.model";
import {User} from "../users/users.model";

@Module({
    controllers: [AlbumController],
    providers: [AlbumService],
    imports: [
        SequelizeModule.forFeature([Album, Track, Author, UserAlbum, User]),
        UsersModule
    ],
    exports: [AlbumService]
})
export class AlbumModule {}
