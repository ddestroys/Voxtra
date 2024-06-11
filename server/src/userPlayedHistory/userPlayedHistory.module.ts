import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {UserPlayedHistory} from "./userPlayedHistory.model";
import {UserPlayedHistoryTrack} from "../userPlayedHistoryTrack/userPlayedHistoryTrack.model";
import {Track} from "../track/track.model";
import {UserPlayedHistoryService} from "./userPlayedHistory.service";
import {TrackModule} from "../track/track.module";
import {UserPlayedHistoryController} from "./userPlayedHistory.controller";


@Module({
    controllers: [UserPlayedHistoryController],
    providers: [UserPlayedHistoryService],
    imports: [
        SequelizeModule.forFeature([User, UserPlayedHistory,UserPlayedHistoryTrack, Track]),
        TrackModule,],
    exports: [UserPlayedHistoryService]
})
export class UsersPlayedHistoryModule {}