import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import {FileService} from "../file/file.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Track} from "./track.model";
import {Comment} from "./comment.model";
import {Author} from "../author/author.model";
import {User} from "../users/users.model";

@Module({
  controllers: [TrackController],
  providers: [TrackService, FileService],
  imports: [
    SequelizeModule.forFeature([Track, Comment, Author, User]),
  ],
  exports: [TrackService]
})
export class TrackModule {}
