import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserPlaylist} from "./userPlaylist.model";
import {User} from "../users/users.model";
import {UserPlaylistController} from "./userPlaylist.controller";
import {UserPlaylistService} from "./userPlaylist.service";
import {UserPlaylistTrack} from "../userPlaylistTrack/userPlaylistTrack.model";
import {Track} from "../track/track.model";
import {TrackModule} from "../track/track.module";
import {FileService} from "../file/file.service";

@Module({
    controllers: [UserPlaylistController],
    providers: [UserPlaylistService, FileService],
    imports: [
        SequelizeModule.forFeature([User, UserPlaylist,UserPlaylistTrack, Track]),
        TrackModule,
    ],
    exports: [UserPlaylistService]
})
export class UsersPlaylistModule {}