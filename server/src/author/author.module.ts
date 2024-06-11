import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {Author} from "./author.model";
import {Track} from "../track/track.model";
import {Album} from "../album/album.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forFeature([Author, Track, Album])],
    exports: []
})
export class AuthorModule {}