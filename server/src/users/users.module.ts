import {Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {TrackGenre} from "../trackGenre/trackGenre.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {UserPlaylist} from "../userPlaylist/userPlaylist.model";
import {FileService} from "../file/file.service";
import {UserPlaylistService} from "../userPlaylist/userPlaylist.service";
import {Track} from "../track/track.model";
import {TrackService} from "../track/track.service";
import {Comment} from "../track/comment.model";


@Module({
  controllers: [UsersController],
  providers: [UsersService, FileService, UserPlaylistService, TrackService],
  imports: [
    SequelizeModule.forFeature([User, TrackGenre, UsersTrackGenre, UserPlaylist, Track, Comment])],
  exports: [UsersService]
})
export class UsersModule {}