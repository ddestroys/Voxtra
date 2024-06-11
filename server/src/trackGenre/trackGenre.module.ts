import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {TrackGenre} from "./trackGenre.model";
import {User} from "../users/users.model";
import {UsersTrackGenre} from "../usersTrackGenre/usersTrackGenre.model";
import {TrackGenreController} from "./trackGenre.controller";
import {TrackGenreService} from "./trackGenre.service";


@Module({
    controllers: [TrackGenreController],
    providers: [TrackGenreService],
    imports: [
        SequelizeModule.forFeature([User, TrackGenre, UsersTrackGenre])],
    exports: [TrackGenreService]
})
export class TrackGenreModule {}