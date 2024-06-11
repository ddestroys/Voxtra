import {Module} from "@nestjs/common";
import {SequelizeModule} from '@nestjs/sequelize'
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import {AuthModule} from './auth/auth.module';
import * as path from "path";
import {TrackModule} from "./track/track.module";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import {TrackGenreModule} from "./trackGenre/trackGenre.module";
import {UsersTrackGenre} from "./usersTrackGenre/usersTrackGenre.model";
import {TrackGenre} from "./trackGenre/trackGenre.model";
import {UsersPlaylistModule} from "./userPlaylist/userPlaylist.module";
import {UserPlaylist} from "./userPlaylist/userPlaylist.model";
import {UsersPlayedHistoryModule} from "./userPlayedHistory/userPlayedHistory.module";
import {UserPlayedHistory} from "./userPlayedHistory/userPlayedHistory.model";
import {UserPlayedHistoryTrack} from "./userPlayedHistoryTrack/userPlayedHistoryTrack.model";
import {Track} from "./track/track.model";
import {UserPlaylistTrack} from "./userPlaylistTrack/userPlaylistTrack.model";
import {TrackTrackGenre} from "./trackTrackGenre/TrackTrackGenre.model";
import {AlbumModule} from "./album/album.module";
import {Album} from "./album/album.model";
import {TrackAlbum} from "./trackAlbum/trackAlbum.model";
import {AuthorModule} from "./author/author.module";
import {Author} from "./author/author.model";
import {UserAlbum} from "./userAlbum/userAlbum.model";
import {UserAuthor} from "./userAuthor/userAuthor.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, UsersTrackGenre, TrackGenre, UserPlaylist,
                UserPlayedHistory, UserPlayedHistoryTrack, Track, UserPlaylistTrack,
                TrackTrackGenre, Album, TrackAlbum, Author, UserAlbum, UserAuthor],
            autoLoadModels: true,
            /*sync: {
                force: true
            }*/
        }),
        UsersModule,
        AuthModule,
        TrackModule,
        FileModule,
        TrackGenreModule,
        UsersPlaylistModule,
        UsersPlayedHistoryModule,
        AlbumModule,
        AuthorModule,
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    ]
})
export class AppModule {
}